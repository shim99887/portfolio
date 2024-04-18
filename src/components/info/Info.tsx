import React from 'react'
import { Email, GitHub, Phone } from '@mui/icons-material'
import * as S from './Info.styles'
import Detail from '../../components/info/components/Detail/Detail'
import DetailHyperLink from '../../components/info/components/DetailHyperLink/DetailHyperLink'

const Info = () => {
  return (
    <S.Container>
      <div style={{width: "150px", height: "200px", backgroundImage: "url(/profile.jpg)", backgroundSize: "cover"}}/>
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
          <a target="_blank" href="https://github.com/shim99887">https://github.com/shim99887</a>
        </S.Wrapper>
      </S.DetailWrapper>
    </S.Container>
  )
}

export default Info
