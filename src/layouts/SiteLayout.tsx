import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { useEffect } from 'react'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}

export function SiteLayout() {
  return (
    <>
      <ScrollManager />
      <Outlet />
      <Footer />
    </>
  )
}
