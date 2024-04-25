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
import { Style } from '../common/Style'
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons'
import { EmptyMarginTopRowCol, EmptyRowCol, Tag } from '../common'

const ProjectRow = ({
  payload,
}: PropsWithChildren<{ payload: iProject.Project }>) => {
  const PINK = 'rgba(255, 192, 203, 0.6)'
  const BLUE = 'rgba(0, 0, 255, 0.6)'

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
    <Row>
      <Col style={Style.gray} sm={12} md={4}>
        <h5>
          {payload.startedAt} ~ {payload.endedAt && payload.endedAt}
        </h5>
      </Col>
      <Col sm={12} md={8}>
        <Row>
          <Col>
            <h5 style={{ fontWeight: 'bold' }}>{payload.title}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <span style={{ fontSize: '0.7rem' }}>{payload.company}</span>
          </Col>
        </Row>
        <Row className={'pt-1'}>
          <Col>
            <ul>
              {payload.contribute.map((item, index) => (
                <li key={index.toString()} className={'mb-1'}>
                  {item}
                </li>
              ))}
              {payload.detail && (
                <li className={'mb-1'} style={{ listStyle: 'none' }}>
                  <Accordion defaultActiveKey={'0'}>
                    <ContextAwareToggle eventKey={'1'} />
                    <Accordion.Collapse eventKey={'1'}>
                      <Row>
                        <Col sm={6} md={4}>
                          {payload.detail.innerImage.map((url, index) => (
                            <Image fluid key={index.toString()} src={url} />
                          ))}
                        </Col>
                        <Col sm={6} md={8}>
                          <EmptyRowCol>
                            <Tag content={'프로젝트 설명'} />
                            <span style={Style.detail}>
                              {payload.detail.projectDetail}
                            </span>
                          </EmptyRowCol>
                          <EmptyMarginTopRowCol>
                            <Tag content={'개발 주요 사항'} />
                            {payload.detail.contributes.map((item, index) => (
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
                              {payload.detail.techStack.map((item, index) => (
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
                            <span style={Style.detail}>
                              {payload.detail.detail}
                            </span>
                          </EmptyMarginTopRowCol>
                          <EmptyMarginTopRowCol>
                            <Tag content={'프로젝트 회고'} />
                            <span style={Style.detail}>
                              {payload.detail.retrospect.map((item, index) => (
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
                </li>
              )}
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ProjectRow
