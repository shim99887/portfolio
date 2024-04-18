import { PropsWithChildren } from 'react'
import { IRow } from '../common/IRow'
import Row from '../../components/common/Row'
import { IEtc } from '../common/IEtc'
import Bar from "../common/Bar";

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
      {index > 0 && <Bar/>}
      <Row payload={parsing()} />
    </>
  )
}

export default EtcRow
