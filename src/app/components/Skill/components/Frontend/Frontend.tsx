import * as S from './Frontend.styles'
import SkillDetail from '@/app/components/Skill/components/SkillDetail/SkillDetail'

const Frontend = () => {
  return (
    <S.Container>
      <S.Label>FrontEnd</S.Label>
      <S.Wrapper>
        <ul>
          <S.Row>
            <SkillDetail name="React" />
            <SkillDetail name="React Native" />
            <SkillDetail name="TypeScript" />
          </S.Row>
        </ul>
      </S.Wrapper>
    </S.Container>
  )
}

export default Frontend
