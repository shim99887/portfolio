import { ICommon } from '../common/ICommon'

export declare namespace iEtc {
  export interface Etc {
    startedAt: string
    endedAt?: string
    title: string
    description: string
  }

  export interface Payload extends ICommon.Payload {
    list: Etc[]
  }
}
