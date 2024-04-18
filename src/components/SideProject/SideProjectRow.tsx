import React, { PropsWithChildren } from 'react'
import { ISideProject } from '../common/ISideProject'
import CommonSideProject from '../../components/common/CommonSideProject'
import { ICommonSideProject } from '../common/ICommonSideProject'

const SideProjectRow = ({
  index,
  payload,
  toggle,
  setSideProject,
}: PropsWithChildren<{
  index: number
  payload: ISideProject.SideProject
  toggle: () => void
  setSideProject: React.Dispatch<React.SetStateAction<ISideProject.SideProject>>
}>) => {
  function parsing(): ICommonSideProject.Payload {
    return {
      title: payload.title,
      image: payload.titleImage,
    } as ICommonSideProject.Payload
  }

  return (
    <div
      style={{ width: 'calc(50% - 20px)', display: 'flex', justifyContent: 'center' }}
      onClick={() => {
        toggle()
        setSideProject(payload)
      }}
    >
      <CommonSideProject payload={parsing()} />
    </div>
  )
}

export default SideProjectRow
