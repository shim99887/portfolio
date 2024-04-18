import {IRow} from "./IRow";
import {ICommon} from "./ICommon";
import {Company} from "../../payload/project";

export declare namespace IProject {
  import Description = IRow.Description

  export interface Payload extends ICommon.Payload {
    list: Project[]
  }

  export interface Project {
    title: string
    company: Company
    startedAt: string
    endedAt?: string
    description?: Description[]
    subTitle?: string
  }
}
