import * as S from './Infra.styles'
import SkillDetail from '@/app/components/Skill/components/SkillDetail/SkillDetail'

const Infra = () => {
  return (
    <S.Container>
      <S.Label>Infra</S.Label>
      <S.Wrapper>
        <ul>
          <S.Row>
            <SkillDetail name="Spring Boot" />
            <SkillDetail name="React.js" />
            <SkillDetail name="React Native" />
          </S.Row>
        </ul>
      </S.Wrapper>
    </S.Container>
  )
}

export default Infra
