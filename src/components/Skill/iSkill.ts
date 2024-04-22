import { ICommon } from '../common/ICommon'

export declare namespace iSkill {
  export interface Skill {
    group: string
    list: string[]
  }

  export interface Payload extends ICommon.Payload {
    list: Skill[]
  }
}
