import { styled } from '@mui/system'
import { Dialog } from '@mui/material'

export const Container = styled('div')`
  display: flex;
  width: 100vw;
  justify-content: flex-end;
`

export const Wrapper = styled('div')`
  display: flex;
`
export const RightWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
  width: calc(100vw - 200px);
`

export const RightTitle = styled('div')`
  font-size: 1.4rem;
  font-weight: 500;
`

export const RightSubTitle = styled('div')`
  font-size: 0.8rem;
  font-weight: 300;
  color: slategray;
`

export const LeftTitle = styled('div')`
  font-size: 1.2rem;
  color: silver;
  width: 200px;
`

export const DescriptionWrapper = styled('ul')`
  margin-left: 20px;
`

export const Description = styled('li')`
  font-size: 0.9rem;
  margin-bottom: 10px;
`

export const SideProjectWrapper = styled('div')`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`

export const SideProjectTitle = styled('div')((props) => ({
  backgroundColor: props.myBackgroundColor,
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3px',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
}))

export const SideProjectImage = styled('div')((props) => ({
  backgroundImage: 'url(' + props.image + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  borderTopRightRadius: '10px',
  borderTopLeftRadius: '10px',
}))

export const DialogContainer = styled(Dialog)`
  overflow-y: auto;
  //height: 80%;
`

export const DialogTopContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

export const DialogTopLeftContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  gap: 10px;
`

export const DialogTopRightContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-left: 20px;
  gap: 5px;
`

export const DialogTitle = styled('div')`
  color: black;
  font-size: large;
  margin-top: 20px;
  font-weight: bold;
`

export const DialogSubTitle = styled('div')`
  color: slategray;
  font-size: small;
`

export const DialogInnerImage = styled('img')`
  max-height: 300px;
  object-fit: contain;
`

export const DialogDevHighlight = styled('div')`
  margin-top: 15px;
  gap: 5px;
`

export const DialogTag = styled('div')`
  color: black;
  font-size: medium;
  font-weight: bold;
`

export const DialogDev = styled('div')`
  margin-left: 10px;
  color: rgba(15, 15, 15, 0.67);
  margin-top: 5px;
`

export const DialogTechStack = styled('div')`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const DialogTechLeft = styled('div')`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const DialogTechWrapper = styled('div')`
  display: flex;
  padding-left: 20px;
  margin-top: 10px;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
`

export const DialogTech = styled('div')`
  color: rgba(15, 15, 15, 0.67);
  width: 100%;
`

export const DialogHyperLinkWrapper = styled('div')`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const DialogGithub = styled('a')`
  color: slategray;
`

export const DialogMiddleContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const DialogProjectDetail = styled('div')`
  color: slategray;
  margin-top: 10px;
  white-space: pre-wrap;
`

/*
const MyStyledButton = styled('button')((props) => ({
  backgroundColor: props.myBackgroundColor,
}));
 */
