import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { cache } from 'react'

export const getMds = cache(async (folder: string) => {
  // 获取存放post的目录
  const postsPath = path.join(process.cwd(), folder)
  // 正则
  const reg = /\.md?$/
  // 返回名字后缀符合.md的文件
  const posts: string[] = fs.readdirSync(postsPath).filter(fileName => reg.test(fileName))

  return Promise.all(
    posts.map(async item => {
      const postContent = fs.readFileSync(path.join(postsPath, item), 'utf-8')
      const { data, content } = matter(postContent)
      if (data.published === false) {
        return null
      }

      return { ...data, body: content } as any
    })
  )
})
