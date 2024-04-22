import React, { PropsWithChildren } from 'react'
import { Col, Row } from 'react-bootstrap'
import { iInfo } from './iInfo'
import { HyperLink } from '../common'

const Info = ({ payload }: PropsWithChildren<{ payload: iInfo.Payload }>) => {
  if (payload.disable) return null

  const renderContact = () => (
    <>
      {payload.contact.map((item, index) => (
        <Row key={index.toString()} className={'pb-3'}>
          {item.icon && <Col xs={1}>{item.icon}</Col>}
          <Col xs={'auto'}>
            <HyperLink link={item.link} url={item.content} />
          </Col>
        </Row>
      ))}
    </>
  )

  const renderName = () => (
    <Row className={'pb-3 pt-3'}>
      <Col>
        <h1 style={{ fontWeight: 'bold' }}>
          {payload.name} ({payload.engName})
        </h1>
      </Col>
    </Row>
  )

  return (
    <div className={'mt-5'}>
      <Row>
        <Col sm={12} md={3}>
          <div className={'text-center pb-5'}>
            <img
              className={'img-fluid'}
              src={payload.profileImage}
              alt={'profileImage'}
              style={{ maxHeight: '320px' }}
            />
          </div>
        </Col>
        <Col sm={12} md={9}>
          {renderName()}
          {renderContact()}
        </Col>
      </Row>
    </div>
  )
}

export default Info
