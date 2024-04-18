import { ICommon } from '@/app/components/common/ICommon'
import { TechStack } from '@/app/components/common/TechStack'

export declare namespace ISideProject {
  export interface Payload extends ICommon.Payload {
    list: SideProject[]
  }

  export interface SideProject {
    id: string
    title: string
    titleImage: string
    innerImages: string[]
    subtitle?: string
    technologyStack: TechStack[]
    contribute: string[]
    projectDescription: string
    devDescription: string
    innerTitle: string
    openSources?: string[]
    github?: string
  }
}
