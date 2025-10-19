import { useEffect, useState } from "react"

export function useIsMobile(breakpoint = 600) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [breakpoint])

  return isMobile
}
