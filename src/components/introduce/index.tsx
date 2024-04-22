import { PropsWithChildren } from 'react'
import { IIntroduce } from './IIntroduce'
import { Col, Row } from 'react-bootstrap'

const Introduce = ({
  payload,
}: PropsWithChildren<{ payload: IIntroduce.Payload }>) => {
  if (payload.disable) return null
  console.log()
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

export default Introduce
