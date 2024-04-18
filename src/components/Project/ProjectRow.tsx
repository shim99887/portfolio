import { IProject } from '../common/IProject'
import { PropsWithChildren } from 'react'
import { IRow } from '../common/IRow'
import Row from '../../components/common/Row'
import Bar from "../common/Bar";

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
      {index > 0 && <Bar />}
      <Row payload={parsing()} />
    </>
  )
}

export default ProjectRow
