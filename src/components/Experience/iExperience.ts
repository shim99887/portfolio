import { ICommon } from '../common/ICommon'

export declare namespace iExperience {
  export interface Experience {
    company: string
    startedAt: string
    endedAt?: string
    description: string
    techStack: string[]
    contribute: string[]
  }

  export interface Payload extends ICommon.Payload {
    list: Experience[]
  }
}
