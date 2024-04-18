import React, { PropsWithChildren, useState } from 'react'
import { ICommonSideProject } from './ICommonSideProject'
import * as S from './CommonStyle'

const CommonSideProject = ({ payload }: PropsWithChildren<{ payload: ICommonSideProject.Payload }>) => {
  return (
    <S.SideProjectWrapper>
      <S.SideProjectImage style={{backgroundImage: 'url(' + payload.image + ')'}} />
      <S.SideProjectTitle>{payload.title}</S.SideProjectTitle>
    </S.SideProjectWrapper>
  )
}

export default CommonSideProject
