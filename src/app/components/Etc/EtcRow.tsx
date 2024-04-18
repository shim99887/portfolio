import { PropsWithChildren } from 'react'
import { IRow } from '@/app/components/common/IRow'
import Row from '@/app/components/common/Row'
import { IEtc } from '@/app/components/common/IEtc'

const EtcRow = ({ payload, index }: PropsWithChildren<{ payload: IEtc.Etc; index: number }>) => {
  function parsing(): IRow.Payload {
    return {
      left: {
        title: payload.endedAt ? payload.startedAt + ' ~ ' + payload.endedAt : payload.startedAt,
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

export default EtcRow
