import React, { PropsWithChildren, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { iSideProject } from './iSideProject'
import SideProjectModal from './modal'
import SideProjectRow from './row'

const SideProjectComponent = ({
  payload,
}: PropsWithChildren<{ payload: iSideProject.Payload }>) => {
  if (payload.disable) return null

  const [open, setOpen] = useState(false)
  const [pjt, setPjt] = useState<iSideProject.SideProject>({
    thumbnail: '',
    title: '',
    innerImage: [],
    subTitle: '',
    detail: '',
    contributes: [],
    techStack: [],
    github: '',
    projectDescription: [],
  })

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <React.Fragment>
      <Row className={'mt-5 mb-2'}>
        <Col>
          <h3>SIDE-PROJECT</h3>
        </Col>
      </Row>
      <Row>
        {payload.list.map((pjt, index) => (
          <Col
            key={index.toString()}
            sm={12}
            md={4}
            className={'d-flex justify-content-center mb-2'}
            onClick={() => {
              setOpen(true)
              setPjt(pjt)
            }}
          >
            <SideProjectRow payload={pjt} />
          </Col>
        ))}
      </Row>
      <SideProjectModal payload={pjt} open={open} toggle={toggle} />
    </React.Fragment>
  )
}

export default SideProjectComponent
