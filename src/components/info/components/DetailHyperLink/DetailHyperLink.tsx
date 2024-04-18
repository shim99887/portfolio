import { ReactNode } from 'react'
import * as S from './DetailHyperLink.styles'

interface Props {
  Icon: ReactNode
  text: string
}

const DetailHyperLink = ({ Icon, text }: Props) => {
  return (
    <S.Wrapper>
      <a href={text} target="_blank">
        {text}
      </a>
    </S.Wrapper>
  )
}

export default DetailHyperLink
