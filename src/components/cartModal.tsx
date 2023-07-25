import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay } from '../styles/components/cartModal'

export function CartModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <h1>oieoie oie</h1>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
