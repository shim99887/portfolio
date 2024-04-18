import { ReactNode } from 'react'
import * as S from './Detail.styles'

interface Props {
  Icon: ReactNode
  text: string
}

const Detail = ({ Icon, text }: Props) => {
  return (
    <S.Wrapper>
      <Icon />
      <div>{text}</div>
    </S.Wrapper>
  )
}

export default Detail
