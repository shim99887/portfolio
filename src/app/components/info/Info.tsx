import React from 'react'
import { Email, GitHub, Phone } from '@mui/icons-material'
import Image from 'next/image'
import * as S from './Info.styles'
import Detail from '@/app/components/info/components/Detail/Detail'
import DetailHyperLink from '@/app/components/info/components/DetailHyperLink/DetailHyperLink'

const Info = () => {
  return (
    <S.Container>
      <Image src="/profile.jpg" width="150" height="200" alt="profile" />
      <S.DetailWrapper>
        <S.Name>김영록 (YoungRok Kim)</S.Name>
        <Detail Icon={() => <Phone fontSize="small" />} text="010-6342-3413" />
        <Detail Icon={() => <Email fontSize="small" />} text="shim99887@gmail.com" />
        <DetailHyperLink Icon={() => <GitHub fontSize="small" />} text="https://github.com/shim99887" />
      </S.DetailWrapper>
    </S.Container>
  )
}

export default Info
