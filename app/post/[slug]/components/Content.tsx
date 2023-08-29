import React from 'react'
import MarkdownIt from 'markdown-it'
import shiki from 'shiki'
import Link from 'next/link'
import { formatDateEng } from '@/util/format'
import { getPost } from '../../utils'
import '../markdown.css'
import '../code.css'
import config from '@/config/site.config'

interface IProps {
  slug: string
}

async function Index(props: IProps) {
  const { slug } = props
  const post = await getPost(slug)
  const html = await shiki
    .getHighlighter({
      theme: 'one-dark-pro',
    })
    .then(highlighter => {
      const md = MarkdownIt({
        highlight: (code, lang) => {
          const tokens = highlighter.codeToThemedTokens(code, lang)
          return shiki.renderToHtml(tokens, {
            elements: {
              pre({ children }) {
                return `<pre class="pre-dark">${children}</pre>`
              },
            },
          })
        },
      })
      return md.render(post.body)
    })
  return (
    <div className="prose w-60% m-auto m-b-50px xs:w-90% m-t-66px">
      <div className="m-b-30px">
        <div>
          <h1>{post.title}</h1>
          <p className="flex justify-between">
            <span className="color-gray">
              {config.author}, {formatDateEng(post.date)}
            </span>
            <Link className="cursor-pointer color-gray" href={'/post'}>
              back
            </Link>
          </p>
        </div>
      </div>
      <article className="prose" dangerouslySetInnerHTML={{ __html: html }}></article>
    </div>
  )
}

export default Index
