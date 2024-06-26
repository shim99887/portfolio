import { PropsWithChildren } from 'react'
import { iProject } from './iProject'
import { Col, Row } from 'react-bootstrap'
import { Style } from '../common/Style'
import DetailRow from './detailRow'

const ProjectRow = ({
  payload,
}: PropsWithChildren<{ payload: iProject.Project }>) => (
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
              {payload.detail && (
                <li className={'mb-1'} style={{ listStyle: 'none' }}>
                  <DetailRow payload={payload.detail} />
                </li>
              )}
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  )

export default ProjectRow
