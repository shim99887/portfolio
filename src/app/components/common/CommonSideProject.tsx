import React, { PropsWithChildren, useState } from 'react'
import { ICommonSideProject } from '@/app/components/common/ICommonSideProject'
import * as S from './CommonStyle'
import { useRouter } from 'next/navigation'

const CommonSideProject = ({ payload }: PropsWithChildren<{ payload: ICommonSideProject.Payload }>) => {
  const navigation = useRouter()

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <S.SideProjectWrapper>
      <S.SideProjectImage image={payload.image} />
      <S.SideProjectTitle myBackgroundColor="rgb(37,37,37)">{payload.title}</S.SideProjectTitle>
    </S.SideProjectWrapper>
  )
}

export default CommonSideProject
