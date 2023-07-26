import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
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

export function CartModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <ContentTitle>Sacola de Compras</ContentTitle>
          <CloseButton>
            <AiOutlineClose size={24} />
          </CloseButton>

          <ItemContainer hasBoxShadow={false}>
            <Item hasManyItens={false}>
              <ImageContainer>
                <Image
                  src="https://files.stripe.com/links/MDB8YWNjdF8xTUxrME5Cd0VkcmhZNnlzfGZsX3Rlc3RfUGJpUlhvOGdkSkw3elZRZmt4MnR4T3pp00AHbJ1sL9"
                  width={94.788}
                  height={94.788}
                  alt=""
                  priority={true}
                />
              </ImageContainer>
              <ItemDetails>
                <div>
                  <p>Camiseta Beyond the Limits</p>
                  <span>R$ 79,90</span>
                </div>
                <button>Remover</button>
              </ItemDetails>
            </Item>

            <Item hasManyItens={false}>
              <ImageContainer>
                <Image
                  src="https://files.stripe.com/links/MDB8YWNjdF8xTUxrME5Cd0VkcmhZNnlzfGZsX3Rlc3RfUGJpUlhvOGdkSkw3elZRZmt4MnR4T3pp00AHbJ1sL9"
                  width={94.788}
                  height={94.788}
                  alt=""
                  priority={true}
                />
              </ImageContainer>
              <ItemDetails>
                <div>
                  <p>Camiseta Beyond the Limits</p>
                  <span>R$ 79,90</span>
                </div>
                <button>Remover</button>
              </ItemDetails>
            </Item>

            <Item hasManyItens={false}>
              <ImageContainer>
                <Image
                  src="https://files.stripe.com/links/MDB8YWNjdF8xTUxrME5Cd0VkcmhZNnlzfGZsX3Rlc3RfUGJpUlhvOGdkSkw3elZRZmt4MnR4T3pp00AHbJ1sL9"
                  width={94.788}
                  height={94.788}
                  alt=""
                  priority={true}
                />
              </ImageContainer>
              <ItemDetails>
                <div>
                  <p>Camiseta Beyond the Limits</p>
                  <span>R$ 79,90</span>
                </div>
                <button>Remover</button>
              </ItemDetails>
            </Item>

            <Item hasManyItens={false}>
              <ImageContainer>
                <Image
                  src="https://files.stripe.com/links/MDB8YWNjdF8xTUxrME5Cd0VkcmhZNnlzfGZsX3Rlc3RfUGJpUlhvOGdkSkw3elZRZmt4MnR4T3pp00AHbJ1sL9"
                  width={94.788}
                  height={94.788}
                  alt=""
                  priority={true}
                />
              </ImageContainer>
              <ItemDetails>
                <div>
                  <p>Camiseta Beyond the Limits</p>
                  <span>R$ 79,90</span>
                </div>
                <button>Remover</button>
              </ItemDetails>
            </Item>

            {/* <Item hasManyItens={true}>
              <ImageContainer>
                <Image
                  src="https://files.stripe.com/links/MDB8YWNjdF8xTUxrME5Cd0VkcmhZNnlzfGZsX3Rlc3RfUGJpUlhvOGdkSkw3elZRZmt4MnR4T3pp00AHbJ1sL9"
                  width={94.788}
                  height={94.788}
                  alt=""
                  priority={true}
                />
              </ImageContainer>
              <ItemDetails>
                <div>
                  <p>Camiseta Beyond the Limits</p>
                  <span>R$ 79,90</span>
                </div>
                <button>Remover</button>
              </ItemDetails>
            </Item> */}
          </ItemContainer>

          <Footer>
            <div>
              <NormalSpan>Quantidade</NormalSpan>
              <NormalSpan>2 itens</NormalSpan>
            </div>
            <div>
              <StrongSpan>Valor Total</StrongSpan>
              <ValueSpan>R$ 270,00</ValueSpan>
            </div>
            <button>Finalizar compra</button>
          </Footer>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
