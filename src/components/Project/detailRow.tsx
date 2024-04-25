import { PropsWithChildren, useContext } from 'react'
import { iProject } from './iProject'
import {
  Accordion,
  AccordionContext,
  Col,
  Image,
  Row,
  useAccordionButton,
} from 'react-bootstrap'
import { EmptyMarginTopRowCol, EmptyRowCol, Tag } from '../common'
import { Style } from '../common/Style'
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons'

const ProjectDetailRow = ({
  payload,
}: PropsWithChildren<{ payload: iProject.ProjectDetail }>) => {
  function ContextAwareToggle({
    eventKey,
    callback,
  }: PropsWithChildren<{
    eventKey: string
    callback?: any
  }>) {
    const { activeEventKey } = useContext(AccordionContext)

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    )

    const isCurrentEventKey = activeEventKey === eventKey

    return (
      <button
        type="button"
        style={{ backgroundColor: 'transparent', border: 'transparent' }}
        onClick={decoratedOnClick}
      >
        {!isCurrentEventKey ? <CaretDownFill /> : <CaretUpFill />}
        <span className={'ps-1'} style={{ fontWeight: 'bold' }}>
          세부 정보
        </span>
      </button>
    )
  }

  return (
    <Accordion defaultActiveKey={'0'}>
      <ContextAwareToggle eventKey={'0'} />
      <Accordion.Collapse eventKey={'0'}>
        <Row>
          <Col sm={6} md={4}>
            {payload.innerImage.map((url, index) => (
              <Image fluid key={index.toString()} src={url} />
            ))}
          </Col>
          <Col sm={6} md={8}>
            <EmptyRowCol>
              <Tag content={'프로젝트 설명'} />
              <span style={Style.detail}>{payload.projectDetail}</span>
            </EmptyRowCol>
            <EmptyMarginTopRowCol>
              <Tag content={'개발 주요 사항'} />
              {payload.contributes.map((item, index) => (
                <Col
                  key={index.toString()}
                  className={'mt-2'}
                  style={Style.detailGray}
                  md={12}
                >
                  - {item}
                </Col>
              ))}
            </EmptyMarginTopRowCol>
            <EmptyMarginTopRowCol>
              <Tag content={'기술 스택'} />
              <Row>
                {payload.techStack.map((item, index) => (
                  <Col
                    key={index.toString()}
                    style={Style.detailGray}
                    className={'mt-2'}
                    md={6}
                  >
                    - {item}
                  </Col>
                ))}
              </Row>
            </EmptyMarginTopRowCol>
            <EmptyMarginTopRowCol>
              <Tag content={'프로젝트 상세 설명'} />
              <span style={Style.detail}>{payload.detail}</span>
            </EmptyMarginTopRowCol>
            <EmptyMarginTopRowCol>
              <Tag content={'프로젝트 회고'} />
              <span style={Style.detail}>
                {payload.retrospect.map((item, index) => (
                  <Row key={index.toString()}>
                    <Col>
                      <span
                        style={{
                          fontWeight: 'bold',
                          fontSize: '0.9rem',
                        }}
                      >
                        - {item.title}
                      </span>
                      <p>{item.content}</p>
                    </Col>
                  </Row>
                ))}
              </span>
            </EmptyMarginTopRowCol>
          </Col>
        </Row>
      </Accordion.Collapse>
    </Accordion>
  )
}

export default ProjectDetailRow
