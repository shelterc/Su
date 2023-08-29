'use client'
import { useTheme } from '@/hooks/useTheme'

function Index() {
  const [_, toggleTheme] = useTheme()

  return (
    <button className="flex cursor-pointer" onClick={toggleTheme}>
      <i
        className="i-carbon-sun w-20px h-20px transition-transform
          duration-1000  color-#756a6a
       dark:color-#ddd rotate-0 scale-100 dark:-rotate-180 dark:scale-0 "
      />
      <i
        className="i-carbon-moon absolute w-20px h-20px transition-transform
        duration=500  color-#756a6a scale-0
       dark:color-#ddd dark:scale-100"
      />
    </button>
  )
}

export default Index
