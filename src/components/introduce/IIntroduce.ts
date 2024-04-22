import {ICommon} from "../common/ICommon";

export declare namespace IIntroduce {
  export interface Payload extends ICommon.Payload {
    content: string[]
  }
}