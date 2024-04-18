import { ICommon } from '@/app/components/common/ICommon'
import { Company } from '@/app/payload/project'
import { IRow } from '@/app/components/common/IRow'

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
