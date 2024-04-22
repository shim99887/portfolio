import {PropsWithChildren} from "react";
import {ISideProject} from "./ISideProject";
import {Card} from "react-bootstrap";

const SideProjectRow = ({payload}: PropsWithChildren<{ payload: ISideProject.SideProject }>) => {
  console.log()
  return (
    <Card className={"text-center"}>
      <Card.Img variant="top" src={payload.thumbnail}/>
      <Card.Body>
        <Card.Title><h6 style={{fontWeight: 'bold'}}>{payload.title}</h6></Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SideProjectRow