import React, { PropsWithChildren } from 'react'
import { IExperience } from './IExperience'
import { Badge, Col, Row } from 'react-bootstrap'
import { ExperienceRow } from './row'

const Experience = ({
  payload,
}: PropsWithChildren<{ payload: IExperience.Payload }>) => {
  if (payload.disable) return null
  return (
    <div>
      <Row className={'mt-5 mb-2'}>
        <Col>
          <h3>
            EXPERIENCE
            <span style={{ fontSize: '50%' }}>
              {' '}
              <Badge bg="secondary">총 2년 3개월</Badge>
            </span>
          </h3>
        </Col>
      </Row>
      {payload.list.map((company, index) => (
        <React.Fragment key={index.toString()}>
          <Row>
            <Col>
              <ExperienceRow payload={company} />
            </Col>
          </Row>
          {index < payload.list.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Experience
