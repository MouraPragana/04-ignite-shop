import { ReactNode } from 'react'
import { Header } from '../styles/layouts/successLayout'
import Link from 'next/link'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'

export function SuccessLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
      </Header>
      {children}
    </>
  )
}
