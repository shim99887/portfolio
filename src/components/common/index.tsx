import {PropsWithChildren, ReactNode} from "react";
import {Col, Row} from "react-bootstrap";

export const HyperLink = ({link, url}: PropsWithChildren<{ link?: string, url: string }>) => {
  if (link) {
    return <a style={{textDecoration: 'none'}} target={"_blank"} href={link}>{url}</a>
  } else {
    return <div>{url}</div>
  }
}

export function EmptyRowCol<T = ReactNode>({children}: PropsWithChildren<T>) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  )
}

export const Tag = ({content}: PropsWithChildren<{ content: string }>) => (
  <div style={{fontWeight: 'bold'}}>• {content}</div>
)
