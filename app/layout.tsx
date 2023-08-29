import './globals.css'
import './view.transition.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
import config from '@/config/site.config'
const Plum = dynamic(() => import('@/components/Plum'), { ssr: false })

export const metadata = {
  title: `${config.author}'s Blog`,
  description: '胡思乱想',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="__next">
          <div id="app" className="flex h-100% flex-col">
            <Header />
            <main className="font-sans flex-auto">{children}</main>
            <Footer />
            <Plum />
          </div>
        </div>
      </body>
    </html>
  )
}
