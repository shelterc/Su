import { MouseEventHandler, useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(window.localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.className = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])
  const toggleTheme: MouseEventHandler<HTMLButtonElement> = event => {
    const model = theme == 'dark' ? 'light' : 'dark'

    const root = document.documentElement

    if ((document as any)?.startViewTransition) {
      const x = event.clientX
      const y = event.clientY
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
      const isDark = root.classList.contains('dark')

      const transition = (document as any)?.startViewTransition(() => {
        setTheme(model)
      })

      transition.ready.then(() => {
        const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
        document.documentElement.animate(
          {
            clipPath: isDark ? [...clipPath].reverse() : clipPath,
          },
          {
            duration: 500,
            easing: 'ease-in',
            pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
          }
        )
      })
    } else {
      setTheme(model)
    }
  }

  return [theme, toggleTheme] as const
}
