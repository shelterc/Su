import Image from 'next/image'
import config from '@/config/site.config'
export default async function Home() {
  return (
    <div className="h-100% flex items-center flex-col justify-center">
      <div className="w-150px h-150px b-rd-50% overflow-hidden m-b-20px border-5px b-solid b-#eee cursor-pointer hover:translate-y--10px ease-in-out duration-300">
        <Image width={150} height={150} src="/author.jpg" unoptimized alt="author" />
      </div>
      <div className="hover:c-#eee hover:bg-#000 dark:c-#eee">{config.slogan}</div>
    </div>
  )
}
