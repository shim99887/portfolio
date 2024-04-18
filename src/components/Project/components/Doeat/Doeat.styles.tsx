import { styled } from '@mui/material'

export const Container = styled('div')`
  display: flex;
  //margin-left: 6vw;
  width: 100vw;
  justify-content: flex-end;
`

export const DetailContainer = styled('div')`
  display: flex;
`
export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
  width: calc(100vw - 200px);
`

export const Name = styled('div')`
  font-size: 1.4rem;
  font-weight: 500;
`

export const Description = styled('div')`
  font-size: 0.8rem;
  font-weight: 300;
  color: slategray;
`

export const Period = styled('div')`
  font-size: 1.2rem;
  color: silver;
  width: 200px;
`

export const ExperienceDetailWrapper = styled('ul')`
  margin-left: 20px;
`

export const ExperienceDetail = styled('li')`
  font-size: 0.9rem;
  margin-bottom: 10px;
`

export const SkillLabel = styled('li')`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 5px;
`

export const SkillWrapper = styled('div')`
  display: flex;
  gap: 0.5vw;
`

export const Skill = styled('div')`
  display: flex;
  font-size: 0.8rem;
  background-color: slategray;
  color: white;
  padding: 3px;
  border-radius: 5px;
`
