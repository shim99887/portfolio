import { PropsWithChildren } from 'react'
import { iSideProject } from './iSideProject'
import { Card } from 'react-bootstrap'

const SideProjectRow = ({
  payload,
}: PropsWithChildren<{ payload: iSideProject.SideProject }>) => (
  <Card className={'text-center'} style={{ cursor: 'pointer' }}>
    <Card.Img variant="top" src={payload.thumbnail} />
    <Card.Body>
      <Card.Title>
        <h6 style={{ fontWeight: 'bold' }}>{payload.title}</h6>
      </Card.Title>
    </Card.Body>
  </Card>
)

export default SideProjectRow
