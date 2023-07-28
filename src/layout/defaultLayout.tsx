import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { PiHandbagBold } from 'react-icons/pi'
import { useShoppingCart } from 'use-shopping-cart'
import logoImg from '../assets/logo.svg'
import { CartModal } from '../components/cartModal'
import {
  Header,
  IconContainer,
  ModalOverlay,
} from '../styles/layouts/defaultLayout'

export function DefaultLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { cartCount } = useShoppingCart()

  return (
    <>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" priority={true} />
        </Link>

        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          {isOpen && <ModalOverlay />}
          <CartModal />

          <Dialog.Trigger asChild>
            <IconContainer>
              <PiHandbagBold size={24} color="#C4C4CC" />
              {cartCount > 0 && <p>{cartCount}</p>}
            </IconContainer>
          </Dialog.Trigger>
        </Dialog.Root>
      </Header>
      {children}
    </>
  )
}
