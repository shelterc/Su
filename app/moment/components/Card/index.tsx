import { IMoment } from '@/interface/post.interface'
import { formatDateEng } from '@/util/format'
import React from 'react'

interface IProps {
  data: IMoment
}

function Index(props: IProps) {
  const { data } = props
  return (
    <article className="prose">
      <p className="color-gray">{formatDateEng(data.date)}</p>
      <p dangerouslySetInnerHTML={{ __html: data.body }}></p>
      {data.imgList.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
          {data.imgList.map((item: string, index) => {
            return <img key={index} src={item} className="object-fill" />
          })}
        </div>
      )}
    </article>
  )
}

export default Index
