import { PropsWithChildren } from 'react'
import { Col, Row } from 'react-bootstrap'
import { iIntroduce } from './iIntroduce'

const IntroduceComponent = ({
  payload,
}: PropsWithChildren<{ payload: iIntroduce.Payload }>) => {
  if (payload.disable) return null
  return (
    <Row>
      <Col sm={12} md={3}>
        <h3 style={{ fontWeight: 'bold' }}>INTRODUCE</h3>
      </Col>
      <Col sm={12} md={9}>
        {payload.content.map((item, index) => (
          <p key={index.toString()}>{item}</p>
        ))}
      </Col>
    </Row>
  )
}

export default IntroduceComponent
