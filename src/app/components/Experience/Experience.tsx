import * as S from './Experience.styles'
import Doeat from '@/app/components/Experience/components/Doeat/Doeat'
import Thira from '@/app/components/Experience/components/Thira/Thira'

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
      <hr />
      <Thira />
    </S.Container>
  )
}

export default Experience
