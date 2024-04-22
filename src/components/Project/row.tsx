import { PropsWithChildren } from 'react'
import { IProject } from './IProject'
import { Col, Row } from 'react-bootstrap'
import { Style } from '../common/Style'

const ProjectRow = ({
  payload,
}: PropsWithChildren<{ payload: IProject.Project }>) => {
  console.log()
  return (
    <Row>
      <Col style={Style.gray} sm={12} md={4}>
        <h5>
          {payload.startedAt} ~ {payload.endedAt && payload.endedAt}
        </h5>
      </Col>
      <Col sm={12} md={8}>
        <Row>
          <Col>
            <h5 style={{ fontWeight: 'bold' }}>{payload.title}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <span style={{ fontSize: '0.7rem' }}>{payload.company}</span>
          </Col>
        </Row>
        <Row className={'pt-1'}>
          <Col>
            <ul>
              {payload.contribute.map((item, index) => (
                <li key={index.toString()} className={'mb-1'}>
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ProjectRow
