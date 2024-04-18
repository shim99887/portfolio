export declare namespace IRow {
  export interface Payload {
    left: Left
    right: Right
  }

  interface Left {
    title: string
  }

  interface Right {
    title: string
    subTitle?: string
    description?: Description[]
  }

  export interface Description {
    content: string
    description?: Description[]
  }
}
