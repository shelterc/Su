'use client'

import { useTheme } from '@/hooks/useTheme'
import { createContext } from 'react'
const ThemeContext = createContext({})
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useTheme()
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
