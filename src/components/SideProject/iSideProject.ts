import { ICommon } from '../common/ICommon'

export declare namespace iSideProject {
  export interface SideProject {
    thumbnail: string
    title: string
    innerImage: string[]
    subTitle: string
    detail: string
    contributes: string[]
    techStack: string[]
    github: string
    projectDescription: string[]
  }

  export interface Payload extends ICommon.Payload {
    list: SideProject[]
  }
}
