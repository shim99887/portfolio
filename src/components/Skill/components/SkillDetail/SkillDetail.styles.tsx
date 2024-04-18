import { styled } from '@mui/material'

export const Item = styled('li')`
  width: 150px;
`

export const Wrapper = styled('div')`
  display: flex;
  gap: 0.5vw;
`

export const Number = styled('div')<{ num?: number }>(
  ({ num }) => `
  width: 20px;
  height: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`,
)

export const Name = styled('div')`
  font-size: 1.2rem;
`

/*

const StyledComp = styled("div", {
  shouldForwardProp: (prop) => prop !== "lowerCase" && prop !== "myProp"
})<{ myProp?: boolean; color?: string }>(
  ({ theme, myProp, color }) => `
  background-color: ${myProp ? "aliceblue" : "red"};
  color: ${color};
  padding: ${theme.spacing(1)};
`
);

 */
