import { IProject } from '@/app/components/common/IProject'
import { PropsWithChildren } from 'react'
import { IRow } from '@/app/components/common/IRow'
import Row from '@/app/components/common/Row'

const ProjectRow = ({ index, payload }: PropsWithChildren<{ index: number; payload: IProject.Project }>) => {
  function parsing(): IRow.Payload {
    return {
      left: {
        title: payload.startedAt + ' ~ ' + payload.endedAt,
      },
      right: {
        title: payload.title,
        subTitle: payload.company,
        description: payload.description,
      },
    }
  }

  return (
    <>
      {index > 0 && <hr />}
      <Row payload={parsing()} />
    </>
  )
}

export default ProjectRow
