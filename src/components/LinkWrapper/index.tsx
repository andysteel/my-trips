import React from 'react'
import * as S from './styles'
import Link from 'next/link'

interface LinkWrapperProps {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
