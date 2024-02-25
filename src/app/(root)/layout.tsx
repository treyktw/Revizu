import MobileNavComponent from '@/components/shared/mobile-nav'
import SidebarComponent from '@/components/shared/sidebar'
import React from 'react'

type Props = {}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
      <SidebarComponent />
      <MobileNavComponent/> 

      <div className='root-container'>
        <div className='wrapper'>
        {children}
        </div>
      </div>
    </main>
  )
}

export default Layout