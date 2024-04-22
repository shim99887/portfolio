import React, { PropsWithChildren } from 'react'
import { IProject } from './IProject'
import { Col, Row } from 'react-bootstrap'
import ProjectRow from './row'

const Project = ({
  payload,
}: PropsWithChildren<{ payload: IProject.Payload }>) => {
  if (payload.disable) return null
  console.log()
  return (
    <div>
      <Row className={'mt-5 mb-2'}>
        <Col>
          <h3>PROJECT</h3>
        </Col>
      </Row>
      {payload.list.map((pjt, index) => (
        <React.Fragment key={index.toString()}>
          <Row>
            <Col>
              <ProjectRow payload={pjt} />
            </Col>
          </Row>
          {index < payload.list.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Project
