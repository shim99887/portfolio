import * as S from './Skill.styles'
import Frontend from '@/app/components/Skill/components/Frontend/Frontend'
import Backend from '@/app/components/Skill/components/Backend/Backend'

const Skill = () => {
  return (
    <S.Container>
      <S.Title>SKILL</S.Title>
      <Frontend />
      <S.Bar />
      <Backend />
    </S.Container>
  )
}

export default Skill
