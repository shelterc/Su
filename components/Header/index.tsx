import Nav from '@/components/Nav'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import siteConfig from '@/config/site.config'
const Theme = dynamic(() => import('./components/Theme'), { ssr: false })

function Index() {
  return (
    <header className="flex justify-between w-68% h-66px m-auto items-center xs:w-100% p-l-80px p-r-80px xs:p-l-30px xs:p-r-30px shrink-0">
      <Link className="text-20px cursor-pointer font-bold font-mono dark:color-white " href={'/'}>
        <span>{siteConfig.blog}</span>
      </Link>
      <nav className="flex items-center column-50px">
        <Nav />
        <Theme />
      </nav>
    </header>
  )
}

export default Index
