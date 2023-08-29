import Link from 'next/link'
import React from 'react'

function Index() {
  const link = [
    {
      name: '博客',
      icon: 'i-carbon-align-box-top-left',
      path: '/post',
    },
    {
      name: '随笔',
      icon: 'i-carbon-bookmark-add',
      path: '/moment',
    },
    {
      name: '关于',
      icon: 'i-carbon-sprout',
      path: '/about',
    },
  ]
  return (
    <nav className="text-right opacity-[0.6] text-[16px] dark:color-#e5e7eb flex">
      {link.map(item => {
        return (
          <Link className="mr-20px" href={item.path}>
            <span className="xs:hidden md:block">{item.name}</span>
            <i className={`xs:block  md:hidden dark:color-#fff ${item.icon}`} />
          </Link>
        )
      })}
    </nav>
  )
}

export default Index
