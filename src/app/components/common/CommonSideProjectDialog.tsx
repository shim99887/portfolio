import * as React from 'react'
import { PropsWithChildren } from 'react'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { ISideProject } from '@/app/components/common/ISideProject'
import {
  DialogContainer,
  DialogDev,
  DialogDevHighlight,
  DialogGithub,
  DialogHyperLinkWrapper,
  DialogInnerImage,
  DialogMiddleContainer,
  DialogProjectDetail,
  DialogSubTitle,
  DialogTag,
  DialogTech,
  DialogTechLeft,
  DialogTechStack,
  DialogTechWrapper,
  DialogTitle,
  DialogTopContainer,
  DialogTopLeftContainer,
  DialogTopRightContainer,
} from '@/app/components/common/CommonStyle'

interface Props {
  open: boolean
  toggle: () => void
}

const CommonSideProjectDialog = ({
  open,
  toggle,
  payload,
}: PropsWithChildren<{ open: boolean; toggle: () => void; payload: ISideProject.SideProject }>) => {
  return (
    <React.Fragment>
      <DialogContainer
        open={open}
        onClose={toggle}
        fullWidth={true}
        maxWidth={'lg'}
        PaperProps={{
          sx: {
            maxHeight: '80vh',
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {payload.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={toggle}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <DialogTopContainer>
            <DialogTopLeftContainer>
              {payload.innerImages.map((url) => (
                <DialogInnerImage src={url} width="100%" height="auto" alt={'innerImage'} />
              ))}
            </DialogTopLeftContainer>
            <DialogTopRightContainer>
              <DialogTitle>{payload.innerTitle}</DialogTitle>
              <DialogSubTitle>{payload.subtitle}</DialogSubTitle>
              <DialogDevHighlight>
                <DialogTag>• 개발 주요 사항</DialogTag>
                {payload.contribute.map((item) => (
                  <DialogDev>{item}</DialogDev>
                ))}
              </DialogDevHighlight>
              <DialogTechStack>
                <DialogTag>• 기술 스택</DialogTag>
                <DialogTechWrapper>
                  <DialogTechLeft>
                    <DialogTag>기술</DialogTag>
                    {payload.technologyStack.map((Tech) => (
                      <DialogTech>- {Tech}</DialogTech>
                    ))}
                  </DialogTechLeft>
                  {payload.openSources && (
                    <DialogTechLeft>
                      <DialogTag>오픈소스</DialogTag>
                      {payload.openSources.map((Tech) => (
                        <DialogTech>- {Tech}</DialogTech>
                      ))}
                    </DialogTechLeft>
                  )}
                </DialogTechWrapper>
              </DialogTechStack>
              <DialogHyperLinkWrapper>
                <DialogTag>• GitHub</DialogTag>
                <DialogGithub href={payload.github} target="_blank">
                  {payload.github}
                </DialogGithub>
              </DialogHyperLinkWrapper>
            </DialogTopRightContainer>
          </DialogTopContainer>
          <DialogMiddleContainer>
            <DialogTag>• 상세 정보</DialogTag>
            <DialogProjectDetail>{payload.devDescription}</DialogProjectDetail>
          </DialogMiddleContainer>
        </DialogContent>
      </DialogContainer>
    </React.Fragment>
  )
}

export default CommonSideProjectDialog
