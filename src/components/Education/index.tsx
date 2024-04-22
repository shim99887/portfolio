import React, { PropsWithChildren } from 'react'
import { IEducation } from './IEducation'
import { Col, Row } from 'react-bootstrap'
import EducationRow from './row'

const Education = ({
  payload,
}: PropsWithChildren<{ payload: IEducation.Payload }>) => {
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

export default Education
