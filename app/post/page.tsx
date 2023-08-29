import Link from 'next/link'
import { formatDate } from '@/util/format'
import { IPostInfo } from '@/interface/post.interface'
import { getMds } from '@/util/getMds'

export default async function Home() {
  const data: IPostInfo[] = await getMds('/post')
  const postMap: { [key: string]: IPostInfo[] } = {}
  data.forEach((item: IPostInfo) => {
    if (item.publish) {
      const date = new Date(item.date).getFullYear()
      if (!postMap[date]) {
        postMap[date] = []
      }
      postMap[date].push(item)
    }
  })

  for (let i in postMap) {
    postMap[i].sort(
      (item1, item2) => new Date(item2.date).getTime() - new Date(item1.date).getTime()
    )
  }

  const sortPostMap = Object.fromEntries(
    Object.entries(postMap).sort(([key1, key2]) => Number(key1) - Number(key2))
  )

  const sortKeys = Object.keys(sortPostMap).sort((a, b) => Number(b) - Number(a))

  return (
    <div className="md:w-60ch m-auto xs:w-90% m-t-66px">
      {sortKeys.map(key => {
        return (
          <div key={key}>
            <h3 className="bold text-[20px] dark:color-white">{key}</h3>
            <ul className="m-l-10px">
              {sortPostMap[key].map((item, index) => {
                return (
                  <li className="block  m-t-30px m-b-30px hover:text-gray" key={index}>
                    <Link
                      key={index}
                      href={'/post/' + item.slug}
                      className="w-100%  flex justify-between xs:flex-wrap"
                    >
                      <span className="text-[16px] dark:color-white">{item.title}</span>
                      <span className="text-[14px] color-coolgray">{formatDate(item.date)}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
