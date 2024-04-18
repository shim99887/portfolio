import * as S from './Education.styles'
import { PropsWithChildren } from 'react'
import { IEducation } from '../common/IEducation'
import EducationRow from '../../components/Education/EducationRow'

const Education = ({ payload }: PropsWithChildren<{ payload: IEducation.Payload }>) => {
  if (payload.disable) return null

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>EDUCATION</S.Title>
      </S.TitleWrapper>
      {payload.list.map((item, index) => (
        <EducationRow payload={item} index={index} key={index} />
      ))}
    </S.Container>
  )
}

export default Education
