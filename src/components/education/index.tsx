import React, { PropsWithChildren } from 'react'
import { Col, Row } from 'react-bootstrap'
import { iEducation } from './iEducation'
import EducationRow from './row'

const EducationComponent = ({
  payload,
}: PropsWithChildren<{ payload: iEducation.Payload }>) => {
  if (payload.disable) return null

  return (
    <React.Fragment>
      <Row className={'mt-5 mb-2'}>
        <Col>
          <h3>EDUCATION</h3>
        </Col>
      </Row>
      {payload.list.map((edu, index) => (
        <React.Fragment key={index.toString()}>
          <Row>
            <Col>
              <EducationRow payload={edu} />
            </Col>
          </Row>
          {index < payload.list.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default EducationComponent
