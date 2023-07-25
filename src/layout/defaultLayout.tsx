import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { PiHandbagBold } from 'react-icons/pi'
import logoImg from '../assets/logo.svg'
import { CartModal } from '../components/cartModal'
import { Header, IconContainer } from '../styles/layouts/defaultLayout'

export function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <IconContainer>
              <PiHandbagBold size={24} color="#C4C4CC" />

              <p>1</p>
            </IconContainer>
          </Dialog.Trigger>
          <CartModal />
        </Dialog.Root>
      </Header>

      {children}
    </>
  )
}
