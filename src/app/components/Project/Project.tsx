import * as S from './Project.styles'
import { IProject } from '@/app/components/common/IProject'
import ProjectRow from '@/app/components/Project/ProjectRow'
import { PropsWithChildren } from 'react'

const Project = ({ payload }: PropsWithChildren<{ payload: IProject.Payload }>) => {
  if (payload.disable) return null

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>PROJECT</S.Title>
      </S.TitleWrapper>
      {payload.list.map((item, index) => (
        <ProjectRow key={index} index={index} payload={item} />
      ))}
    </S.Container>
  )
}

export default Project
