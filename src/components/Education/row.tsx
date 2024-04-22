import { PropsWithChildren } from 'react'
import { iEducation } from './iEducation'
import { Col, Row } from 'react-bootstrap'
import { Style } from '../common/Style'
import { EmptyRowCol } from '../common'

const EducationRow = ({
  payload,
}: PropsWithChildren<{ payload: iEducation.Education }>) => {
  console.log()
  return (
    <Row>
      <Col style={Style.gray} sm={12} md={4}>
        <h5>
          {payload.startedAt} ~ {payload.endedAt && payload.endedAt}
        </h5>
      </Col>
      <Col sm={12} md={8}>
        <EmptyRowCol>
          <h5 style={{ fontWeight: 'bold' }}>{payload.title}</h5>
          <span style={{ fontSize: '0.7rem', color: 'slategrey' }}>
            {payload.description}
          </span>
        </EmptyRowCol>
      </Col>
    </Row>
  )
}

export default EducationRow
