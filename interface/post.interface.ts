export interface IPostInfo {
  author: string
  title: string
  date: Date | string | number
  desc: string
  language: string
  [key: string]: any
}

export interface IMoment {
  author: string
  title: string
  imgList: string[]
  date: Date | string | number
  desc: string
  language: string
  [key: string]: any
}
