import { IRow } from '../../components/common/IRow'
import * as S from './CommonStyle'
import { PropsWithChildren } from 'react'
import CommonDescription from '../../components/common/CommonDescription'

const Row = ({ payload }: PropsWithChildren<{ payload: IRow.Payload }>) => {
  const { left, right } = payload

  return (
    <S.Container>
      <S.Wrapper>
        <S.LeftTitle>{left.title}</S.LeftTitle>
        <S.RightWrapper>
          <S.RightTitle>{right.title}</S.RightTitle>
          {right.subTitle && <S.RightSubTitle>{right.subTitle}</S.RightSubTitle>}
          {payload.right.description && payload.right.description.map((item, index) => <CommonDescription key={index} payload={item} />)}
        </S.RightWrapper>
      </S.Wrapper>
    </S.Container>
  )
}

export default Row
