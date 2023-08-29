import './code.css'
import './markdown.css'
import { getPostMetaData } from '../utils'
import Content from './components/Content'
import { getMds } from '@/util/getMds'

async function page({ params }: { params: { slug: string } }) {
  const { slug } = params

  return <Content slug={slug} />
}

export async function generateStaticParams() {
  const posts = await getMds('/post')
  if (!posts.length) return []
  return posts.map(post => {
    if (post.publish) {
      return {
        slug: post.slug,
      }
    }
  })
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const data = await getPostMetaData(slug)
  return {
    title: data.title,
    description: data.description,
  }
}

export default page
