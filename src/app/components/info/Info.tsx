import React from 'react'
import { Email, GitHub, Phone } from '@mui/icons-material'
import Image from 'next/image'
import * as S from './Info.styles'

const Info = () => {
  const phoneIcon = () => {
    return <Phone fontSize="small" />
  }

  return (
    <S.Container>
      <Image src="/profile.jpg" width="150" height="200" alt="profile" />
      <S.DetailWrapper>
        <S.Name>김영록 (YoungRok Kim)</S.Name>
        <S.Wrapper>
          <Phone fontSize="small" />
          <div>010-6342-3413</div>
        </S.Wrapper>
        <S.Wrapper>
          <Email fontSize="small" />
          <div>shim99887@gmail.com</div>
        </S.Wrapper>
        <S.Wrapper>
          <GitHub fontSize="small" />
          <a href="https://github.com/shim99887" target="_blank">
            https://github.com/shim99887
          </a>
        </S.Wrapper>
      </S.DetailWrapper>
    </S.Container>
  )
}

export default Info
