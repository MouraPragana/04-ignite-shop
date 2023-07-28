import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useShoppingCart } from 'use-shopping-cart'
import {
  CloseButton,
  Content,
  ContentTitle,
  Footer,
  ImageContainer,
  Item,
  ItemContainer,
  ItemDetails,
  NormalSpan,
  Overlay,
  StrongSpan,
  ValueSpan,
} from '../styles/components/cartModal'
import { Box, CircularProgress } from '@mui/material'

export function CartModal() {
  const { cartDetails, removeItem, cartCount, formattedTotalPrice } =
    useShoppingCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false)

  function handleRemoveItem(id: string) {
    removeItem(id)
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      // {produto1: {}, produto2: {}}
      const itemsToBuy = Object.values(cartDetails ?? {}).map((item) => {
        return {
          price: item.price_id,
          quantity: item.quantity,
        }
      })

      const response = await axios.post('/api/checkout', {
        itemsToBuy,
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <ContentTitle>Sacola de Compras</ContentTitle>
          <CloseButton>
            <AiOutlineClose size={24} />
          </CloseButton>

          {cartCount > 0 ? (
            <ItemContainer hasBoxShadow={cartCount > 5}>
              {Object.values(cartDetails ?? {}).map((entry) => {
                const productPriceFormated = new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(entry.price / 100)

                return (
                  <Item key={entry.id} hasManyItens={cartCount > 5}>
                    <ImageContainer>
                      <Image
                        src={entry.image}
                        width={94.788}
                        height={94.788}
                        alt=""
                        priority={true}
                      />
                    </ImageContainer>
                    <ItemDetails>
                      <div>
                        <p>{entry.name}</p>
                        <span>{productPriceFormated}</span>
                      </div>
                      <button onClick={() => handleRemoveItem(entry.id)}>
                        Remover
                      </button>
                    </ItemDetails>
                  </Item>
                )
              })}
            </ItemContainer>
          ) : (
            <span>Não há itens adicionados no carrinho.</span>
          )}

          <Footer>
            <div>
              <NormalSpan>Quantidade</NormalSpan>
              <NormalSpan>{cartCount} itens</NormalSpan>
            </div>
            <div>
              <StrongSpan>Valor Total</StrongSpan>
              <ValueSpan>{formattedTotalPrice}</ValueSpan>
            </div>
            <button
              onClick={handleBuyProduct}
              disabled={isCreatingCheckoutSession || cartCount <= 0}
            >
              {isCreatingCheckoutSession ? (
                <Box color={'#b5a9fd'}>
                  <CircularProgress size={'1.8rem'} color="inherit" />
                </Box>
              ) : (
                'Finalizar compra'
              )}
            </button>
          </Footer>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
