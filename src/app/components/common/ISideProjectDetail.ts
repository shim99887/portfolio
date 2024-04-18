import { ICommon } from '@/app/components/common/ICommon'
import { TechStack } from '@/app/components/common/TechStack'

export declare namespace ISideProjectDetail {
  export interface Payload extends ICommon {
    title: string
    subTitle?: string
    technologyStack: TechStack[]
    contribute: string[]
    projectDescription: string
    devDescription: string
    id: string
  }
}
