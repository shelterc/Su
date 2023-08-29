import React from 'react'
import config from '@/config/site.config'
function Index() {
  return (
    <footer className="dark:color-white text-center h-66px leading-[66px]">
      © {new Date().getFullYear()}, {config.author} | Powered by Next.js
    </footer>
  )
}

export default Index
