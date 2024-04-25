import { ICommon } from '../common/ICommon'

export declare namespace iProject {
  export interface Project {
    title: string
    startedAt: string
    endedAt?: string
    company: string
    contribute: string[]
    detail?: ProjectDetail
  }

  export interface ProjectDetail {
    innerImage: string[]
    projectDetail: string
    contributes: string[]
    techStack: string[]
    detail: string
    retrospect: Retrospect[]
  }

  export interface Retrospect {
    title: string
    content: string
  }

  export interface Payload extends ICommon.Payload {
    list: Project[]
  }
}
