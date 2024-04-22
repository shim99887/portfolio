import { Col, Image, Modal, Row } from 'react-bootstrap'
import { PropsWithChildren } from 'react'
import { iSideProject } from './iSideProject'
import { EmptyRowCol, HyperLink, Tag } from '../common'
import { Style } from '../common/Style'

const SideProjectModal = ({
  open,
  toggle,
  payload,
}: PropsWithChildren<{
  open: boolean
  toggle: () => void
  payload: iSideProject.SideProject
}>) => (
  <Modal centered show={open} onHide={toggle} size={'lg'}>
    <Modal.Header closeButton>
      <Modal.Title>{payload.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row>
        <Col sm={6} md={4}>
          {payload.innerImage.map((url, index) => (
            <Image key={index.toString()} fluid src={url} alt={'innerImage'} />
          ))}
        </Col>
        <Col sm={6} md={8}>
          <EmptyRowCol>
            <span style={{ fontWeight: 'bold' }}>{payload.subTitle}</span>
          </EmptyRowCol>

          <Row className={'mb-2'}>
            <Col>
              <span style={{ fontSize: '75%' }} className={'mb-2'}>
                {payload.detail}
              </span>
            </Col>
          </Row>
          <EmptyRowCol>
            <Tag content={'개발 주요 사항'} />
            {payload.contributes.map((item, index) => (
              <div key={index.toString()} style={Style.gray}>
                {item}
              </div>
            ))}
          </EmptyRowCol>
          <Row className={'mt-2'}>
            <Col>
              <Tag content={'기술 스택'} />
              <Row>
                {payload.techStack.map((item, index) => (
                  <Col
                    key={index.toString()}
                    style={Style.gray}
                    className={'mt-2'}
                    md={6}
                  >
                    {item}
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row className={'mt-2'}>
            <Col>
              <Tag content={'Github'} />
              <HyperLink url={payload.github} link={payload.github}>
                {payload.github}
              </HyperLink>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={'mt-2'}>
        <Col>
          <Tag content={'상세 정보'} />
          {payload.projectDescription.map((desc, index) => (
            <p key={index.toString()} style={Style.gray}>
              {desc}
            </p>
          ))}
        </Col>
      </Row>
    </Modal.Body>
  </Modal>
)

export default SideProjectModal
