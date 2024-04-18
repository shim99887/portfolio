import SkillDetail from '../SkillDetail/SkillDetail'
import * as S from './Infra.styles'

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
