import { PropsWithChildren } from 'react'
import { IEducation } from '../common/IEducation'
import { IRow } from '../common/IRow'
import Row from '../../components/common/Row'
import Bar from "../common/Bar";

const EducationRow = ({ payload, index }: PropsWithChildren<{ payload: IEducation.Education; index: number }>) => {
  function parsing(): IRow.Payload {
    return {
      left: {
        title: payload.startedAt + ' ~ ' + payload.endedAt,
      },
      right: {
        title: payload.title,
        subTitle: payload.subtitle,
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

export default EducationRow
