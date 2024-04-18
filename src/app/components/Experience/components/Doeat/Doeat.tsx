import * as S from './Doeat.styles'

const Doeat = () => {
  console.log()
  return (
    <S.Container>
      <S.DetailContainer>
        <S.Period>2022.09 ~ 2023-09</S.Period>
        <S.Wrapper>
          <S.Name>두잇 (Doeat)</S.Name>
          <S.Description>라이더 앱 및 고객 앱 풀스택 개발자</S.Description>
          <S.ExperienceDetailWrapper>
            <S.ExperienceDetail>품절 및 가격 변동 동기화 백엔드 개발</S.ExperienceDetail>
            <S.ExperienceDetail>스토어 및 라이더 정산 시스템 개편 및 적용</S.ExperienceDetail>
            <S.ExperienceDetail>마트 신사업 백엔드 개발</S.ExperienceDetail>
            <S.ExperienceDetail>고객 앱 채팅 시스템 구현 및 Kafka 이벤트 구현</S.ExperienceDetail>
            <S.ExperienceDetail>라이더 앱 성능 개선 작업</S.ExperienceDetail>
            <S.SkillLabel>Skill</S.SkillLabel>
            <S.SkillWrapper>
              <S.Skill>React.js</S.Skill>
              <S.Skill>TypeScript</S.Skill>
              <S.Skill>React Native</S.Skill>
              <S.Skill>Java</S.Skill>
              <S.Skill>Kotlin</S.Skill>
              <S.Skill>Spring Boot</S.Skill>
              <S.Skill>Mysql</S.Skill>
              <S.Skill>Jpa</S.Skill>
              <S.Skill>Kafka</S.Skill>
            </S.SkillWrapper>
          </S.ExperienceDetailWrapper>
        </S.Wrapper>
      </S.DetailContainer>
    </S.Container>
  )
}

export default Doeat
