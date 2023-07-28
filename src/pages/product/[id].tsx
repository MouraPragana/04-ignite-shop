import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement, useState } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'
import { FailedSnackBar } from '../../components/failedSnacBar'
import { SuccessSnackBar } from '../../components/successSnackBar'
import { DefaultLayout } from '../../layout/defaultLayout'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

interface ProductProps {
  product: {
    id: string
    name: string
    image: string
    price: number
    description: string
    currency: string
    price_id: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addItem, cartDetails } = useShoppingCart()
  const [openError, setOpenError] = useState<boolean>(false)
  const [openSuccess, setOpenSuccess] = useState<boolean>(false)

  function handleBuyProduct() {
    // Eu só quero que a pessoa compre no máximo uma unidade de camisa por compra.
    const itemOnCart = Object.values(cartDetails ?? {}).some(
      (item) => item.id === product.id
    )

    // Caso não tenha esse item no carrinho.
    if (!itemOnCart) {
      setOpenSuccess(true)
      addItem(product, { count: 1 })
    } else {
      setOpenError(true)
    }
  }

  const productPriceFormated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price / 100)

  return (
    <>
      <Head>
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>

      <SuccessSnackBar
        openSuccess={openSuccess}
        message="Produto adicionado ao carrinho com sucesso."
        setOpenSuccess={setOpenSuccess}
      />

      <FailedSnackBar
        openError={openError}
        setOpenError={setOpenError}
        message="Produto já está no carrinho de compras !"
      />

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.image}
            width={520}
            height={480}
            alt=""
            priority={true}
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{productPriceFormated}</span>
          <p>{product.description}</p>
          <button onClick={handleBuyProduct}>Colocar na Sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_N5vyVp9OaJ555g' } }],
    fallback: 'blocking',
    //false - 404.
    //true  - tentar executar getStaticProp - vai mostrar HTML e depois executar o getStaticProps por trás dos panos.
    //blocking - bloqueia html até getStaticProps estiver finalizado.
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { id: string }
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        image: product.images[0],
        price: price.unit_amount,
        description: product.description,
        currency: price.currency,
        price_id: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}

Product.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
