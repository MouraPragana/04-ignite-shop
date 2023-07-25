import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { PiHandbagBold } from 'react-icons/pi'
import logoImg from '../../assets/logo.svg'
import { Header, IconContainer } from './style'

export function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <IconContainer>
          <PiHandbagBold size={24} color="#C4C4CC" />
          <div>
            <p>1</p>
          </div>
        </IconContainer>
      </Header>
      {children}
    </>
  )
}
