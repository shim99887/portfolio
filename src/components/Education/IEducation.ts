import { ICommon } from '../common/ICommon'

export declare namespace IEducation {
  export interface Education {
    startedAt: string
    endedAt?: string
    title: string
    description: string
  }

  export interface Payload extends ICommon.Payload {
    list: Education[]
  }
}
