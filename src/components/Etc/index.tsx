import React, { PropsWithChildren } from 'react'
import { Col, Row } from 'react-bootstrap'
import { iEtc } from './iEtc'
import EtcRow from './row'

const EtcComponent = ({
  payload,
}: PropsWithChildren<{ payload: iEtc.Payload }>) => {
  if (payload.disable) return null

  return (
    <Row className={'mb-5'}>
      <Col>
        <Row className={'mt-5 mb-2'}>
          <Col>
            <h3>ETC</h3>
          </Col>
        </Row>
        {payload.list.map((etc, index) => (
          <React.Fragment key={index.toString()}>
            <Row>
              <Col>
                <EtcRow payload={etc} />
              </Col>
            </Row>
            {index < payload.list.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </Col>
    </Row>
  )
}

export default EtcComponent
