import React, { PropsWithChildren, useState } from 'react'
import { ISideProject } from './ISideProject'
import { Col, Row } from 'react-bootstrap'
import SideProjectRow from './row'
import SideProjectModal from './modal'

const SideProject = ({
  payload,
}: PropsWithChildren<{ payload: ISideProject.Payload }>) => {
  if (payload.disable) return null

  const [open, setOpen] = useState(false)
  const [pjt, setPjt] = useState<ISideProject.SideProject>({
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

export default SideProject
