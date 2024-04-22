import {ICommon} from "../common/ICommon";

export declare namespace IProject {
  export interface Project {
    title: string,
    startedAt: string,
    endedAt?: string,
    company: string,
    contribute: string[]
  }

  export interface Payload extends ICommon.Payload {
    list: Project[]
  }
}