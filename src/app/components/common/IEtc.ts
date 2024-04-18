import { ICommon } from '@/app/components/common/ICommon'

export declare namespace IEtc {
  export interface Payload extends ICommon.Payload {
    list: Etc[]
  }

  export interface Etc {
    title: string
    startedAt: string
    endedAt?: string
    subtitle: string
  }
}