import * as S from './SkillDetail.styles'

interface Props {
  skill?: number
  name: string
}

const SkillDetail = ({ skill, name }: Props) => {
  return (
    <S.Item>
      <S.Wrapper>
        {skill && <S.Number>{skill}</S.Number>}
        <S.Name>{name}</S.Name>
      </S.Wrapper>
    </S.Item>
  )
}

export default SkillDetail
