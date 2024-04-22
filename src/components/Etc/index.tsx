import React, { PropsWithChildren } from 'react'
import { IEtc } from './IEtc'
import { Col, Row } from 'react-bootstrap'
import EtcRow from './row'

const Etc = ({ payload }: PropsWithChildren<{ payload: IEtc.Payload }>) => {
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

export default Etc
