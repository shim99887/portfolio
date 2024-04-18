import SkillDetail from '../SkillDetail/SkillDetail'
import * as S from './Backend.styles'

const Backend = () => {
  return (
    <S.Container>
      <S.Label>Backend</S.Label>
      <S.Wrapper>
        <ul>
          <S.Row>
            <SkillDetail name="Java" />
            <SkillDetail name="Kotlin" />
            <SkillDetail name="Spring Boot" />
          </S.Row>
        </ul>
        <ul>
          <S.Row>
            <SkillDetail name="Mysql" />
            <SkillDetail name="JPA" />
            <SkillDetail name="MyBatis" />
          </S.Row>
        </ul>
      </S.Wrapper>
    </S.Container>
  )
}

export default Backend
