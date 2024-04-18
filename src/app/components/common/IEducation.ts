import { ICommon } from '@/app/components/common/ICommon'

export declare namespace IEducation {
  export interface Payload extends ICommon.Payload {
    list: Education[]
  }

  export interface Education {
    title: string
    startedAt: string
    endedAt: string
    subtitle: string
  }
}
