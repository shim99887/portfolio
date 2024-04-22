import { Col, Row } from 'react-bootstrap'
import React, { PropsWithChildren } from 'react'
import { Style } from '../common/Style'
import { iSkill } from './iSkill'

const Skill = ({ payload }: PropsWithChildren<{ payload: iSkill.Payload }>) => {
  if (payload.disable) return null

  return (
    <div>
      <Row className={'mt-5 mb-2'}>
        <Col>
          <h3>SKILL</h3>
        </Col>
      </Row>
      {payload.list.map((item, index) => (
        <React.Fragment key={index.toString()}>
          <Row>
            <Col sm={12} md={3} className={'text-md-end'} style={Style.gray}>
              <h4>{item.group}</h4>
            </Col>
            <Col sm={12} md={9}>
              <ul>
                <Row>
                  {item.list.map((item, index) => (
                    <Col key={index.toString()} sm={12} md={4}>
                      <li>{item}</li>
                    </Col>
                  ))}
                </Row>
              </ul>
            </Col>
          </Row>
          {index < payload.list.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Skill
