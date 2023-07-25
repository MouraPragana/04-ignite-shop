import * as Dialog from '@radix-ui/react-dialog'

export function CartModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay>
        <Dialog.Content>Villarinho</Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}
