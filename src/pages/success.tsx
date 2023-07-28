import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement, useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { SuccessLayout } from '../layout/successLayout'
import { stripe } from '../lib/stripe'
import {
  ImageContainer,
  Images,
  SuccessContainer,
} from '../styles/pages/success'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    images: string[]
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada !</h1>

        <Images>
          {products.map((product) => (
            <ImageContainer
              key={product.name}
              moreThanOneImage={products.length > 1}
            >
              <Image
                src={product.images[0]}
                width={130.175}
                height={132.9}
                alt=""
                priority={true}
              />
            </ImageContainer>
          ))}
        </Images>

        <p>
          Uhuul, <strong>{customerName}</strong>, sua
          {products.length > 1 ? (
            <span> compra de {products.length} camisetas </span>
          ) : (
            <strong> {products[0].name} </strong>
          )}
          <span>já está a caminho da sua casa.</span>
        </p>

        <Link href="/">Voltar ao cátalogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  // const product = session.line_items.data[0].price.product as Stripe.Product
  const products = session.line_items.data.map((item) => item.price.product)

  return {
    props: {
      customerName,
      products,
    },
  }
}

Success.getLayout = function getLayout(page: ReactElement) {
  return <SuccessLayout>{page}</SuccessLayout>
}
