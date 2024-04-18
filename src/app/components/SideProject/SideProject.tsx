import * as S from './SideProject.styles'
import { PropsWithChildren, useState } from 'react'
import { ISideProject } from '@/app/components/common/ISideProject'
import SideProjectRow from '@/app/components/SideProject/SideProjectRow'
import CommonSideProjectDialog from '@/app/components/common/CommonSideProjectDialog'

const SideProject = ({ payload }: PropsWithChildren<{ payload: ISideProject.Payload }>) => {
  if (payload.disable) return null

  const [open, setOpen] = useState(false)
  const [sideProjectPayload, setSideProjectPayload] = useState<ISideProject.SideProject>({
    title: '',
    titleImage: '',
    technologyStack: [],
    projectDescription: '',
    contribute: [],
    devDescription: '',
    id: '',
    innerImages: [],
    innerTitle: '',
  })

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>SIDE-PROJECT</S.Title>
      </S.TitleWrapper>
      <S.SideProjectWrapper>
        {payload.list.map((item, index) => (
          <SideProjectRow
            key={index}
            index={index}
            payload={item}
            toggle={toggle}
            setSideProject={setSideProjectPayload}
          />
        ))}
      </S.SideProjectWrapper>
      <CommonSideProjectDialog open={open} toggle={toggle} payload={sideProjectPayload} />
    </S.Container>
  )
}

export default SideProject
