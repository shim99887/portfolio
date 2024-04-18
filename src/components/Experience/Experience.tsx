import Doeat from './components/Doeat/Doeat'
import Thira from './components/Thira/Thira'
import * as S from './Experience.styles'
import Bar from "../common/Bar";

const Experience = () => {
  console.log()
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>EXPERIENCE</S.Title>
        <S.TotalWrapper>
          <S.Total>총 2년 3개월</S.Total>
        </S.TotalWrapper>
      </S.TitleWrapper>
      <Doeat />
      <Bar />
      <Thira />
    </S.Container>
  )
}

export default Experience
