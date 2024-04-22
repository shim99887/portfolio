import { PropsWithChildren } from 'react'
import { iExperience } from './iExperience'
import { Badge, Col, Row } from 'react-bootstrap'
import { Style } from '../common/Style'

export const ExperienceRow = ({
  payload,
}: PropsWithChildren<{ payload: iExperience.Experience }>) => (
    <Row>
      <Col style={Style.gray} sm={12} md={4}>
        <h5>
          {payload.startedAt} ~ {payload.endedAt && payload.endedAt}
        </h5>
      </Col>
      <Col sm={12} md={8}>
        <Row>
          <Col>
            <h5 style={{ fontWeight: 'bold' }}>{payload.company}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <span style={{ fontSize: '0.7rem' }}>{payload.description}</span>
          </Col>
        </Row>
        <Row className={'pt-1'}>
          <Col>
            <ul>
              {payload.contribute.map((item, index) => (
                <li key={index.toString()}>{item}</li>
              ))}
              <li>
                <span style={{ fontWeight: 'bold' }}>Skills</span>
              </li>
              <li style={{ listStyle: 'none' }}>
                <div>
                  {payload.techStack.map((item, index) => (
                    <Badge
                      key={index.toString()}
                      bg="secondary"
                      className={'me-1'}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  )
