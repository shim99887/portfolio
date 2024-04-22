import { ICommon } from '../common/ICommon'
import { ReactNode } from 'react'

export declare namespace iInfo {
  interface contact {
    content: string
    icon?: ReactNode
    link?: string
  }

  export interface Payload extends ICommon.Payload {
    profileImage: string
    name: string
    engName: string
    contact: contact[]
    // phoneNumber?: string,
    // githubUrl?: string
    // email?: string
  }
}
