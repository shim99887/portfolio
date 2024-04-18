import * as S from './Thira.styles'

const Thira = () => {
  console.log()
  return (
    <S.Container>
      <S.DetailContainer>
        <S.Period>2021.07 ~ 2022-08</S.Period>
        <S.Wrapper>
          <S.Name>티라유텍 (Thirautech)</S.Name>
          <S.Description>MES 웹 서비스 개발</S.Description>
          <S.ExperienceDetailWrapper>
            <S.ExperienceDetail>대한항공 MES 프론트엔드 개발</S.ExperienceDetail>
            <S.ExperienceDetail>에코프로 MES 프론트엔드 개발</S.ExperienceDetail>
            <S.ExperienceDetail>MES 웹 자체 솔루션 개발 및 개선</S.ExperienceDetail>
            <S.SkillLabel>Skill</S.SkillLabel>
            <S.SkillWrapper>
              <S.Skill>JavaScript</S.Skill>
              <S.Skill>JQuery</S.Skill>
              <S.Skill>MyBatis</S.Skill>
              <S.Skill>Java</S.Skill>
              <S.Skill>Spring Boot</S.Skill>
              <S.Skill>MSSQL</S.Skill>
            </S.SkillWrapper>
          </S.ExperienceDetailWrapper>
        </S.Wrapper>
      </S.DetailContainer>
    </S.Container>
  )
}

export default Thira
