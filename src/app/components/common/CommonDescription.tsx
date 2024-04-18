import { PropsWithChildren } from 'react'
import { IRow } from '@/app/components/common/IRow'
import * as S from './CommonStyle'

const CommonDescription = ({ payload }: PropsWithChildren<{ payload: IRow.Description }>) => {
  return <S.Description>{payload.content}</S.Description>
}

export default CommonDescription
