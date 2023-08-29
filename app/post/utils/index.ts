import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import { cache } from 'react'
import { IPostInfo } from '@/interface/post.interface'
import { getMds } from '@/util/getMds'

// export const getPosts = cache(async () => {
//   // 获取存放post的目录
//   const postsPath = path.join(process.cwd(), '/post')
//   // 正则
//   const reg = /\.md?$/
//   // 返回名字后缀符合.mdx的文件
//   const posts: string[] = fs.readdirSync(postsPath).filter(fileName => reg.test(fileName))

//   return Promise.all(
//     posts.map(async item => {
//       const postContent = fs.readFileSync(path.join(postsPath, item), 'utf-8')
//       const { data, content } = matter(postContent)
//       if (data.published === false) {
//         return null
//       }

//       return { ...data, body: content } as any
//     })
//   )
// })

export async function getPost(slug: string) {
  const posts = await getMds('/post')
  return posts.find((post: IPostInfo) => post.slug === slug)
}

export async function getPostMetaData(slug: string): Promise<IPostInfo> {
  const posts = await getMds('/post')
  const post = posts.find((post: IPostInfo) => post.slug === slug)
  return { ...post, body: '' }
}
