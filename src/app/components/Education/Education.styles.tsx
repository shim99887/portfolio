import { styled } from '@mui/material'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 3vh;
  gap: 1vh 3vw;
`

export const TitleWrapper = styled('div')`
  display: flex;
  gap: 1vw;
`

export const TotalWrapper = styled('div')`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const Total = styled('div')`
  font-size: 0.8rem;
  align-items: flex-end;
  display: flex;
  background-color: rgba(15, 15, 15, 0.4);
  height: auto;
  justify-content: center;
  padding: 3px;
  border-radius: 20px;
  color: white;
`

export const Title = styled('div')`
  font-size: 1.6rem;
  font-weight: bold;
`
