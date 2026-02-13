"use client"

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would trigger a pageview event to Google Analytics or other tools
    // e.g., window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: pathname })
    console.log(`[Analytics] Page View: ${pathname}`)
  }, [pathname, searchParams])

  return null // This component doesn't render anything visible
}
