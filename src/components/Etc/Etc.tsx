import * as S from './Etc.styles'
import { PropsWithChildren } from 'react'
import EtcRow from '../../components/Etc/EtcRow'
import { IEtc } from '../../components/common/IEtc'

const Etc = ({ payload }: PropsWithChildren<{ payload: IEtc.Payload }>) => {
  if (payload.disable) return null

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>ETC</S.Title>
      </S.TitleWrapper>
      {payload.list.map((item, index) => (
        <EtcRow payload={item} index={index} key={index} />
      ))}
    </S.Container>
  )
}

export default Etc
