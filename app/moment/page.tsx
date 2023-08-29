import { getMds } from '@/util/getMds'
import React from 'react'
import Card from './components/Card'
import { IMoment } from '@/interface/post.interface'

async function Index() {
  const list: IMoment[] = await getMds('/moment')
  return (
    <div className="h-320px grid .dark:color-white m-auto md:w-60ch xs:w-90% m-t-66px">
      {list.length > 0 &&
        list.map((item, index) => {
          return <Card data={item} key={index} />
        })}
    </div>
  )
}

export default Index
