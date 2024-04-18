import { PropsWithChildren } from 'react'
import { IEducation } from '@/app/components/common/IEducation'
import { IRow } from '@/app/components/common/IRow'
import Row from '@/app/components/common/Row'

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
      {index > 0 && <hr />}
      <Row payload={parsing()} />
    </>
  )
}

export default EducationRow
