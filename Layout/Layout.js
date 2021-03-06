import React from 'react'
import Navbar from '../components/Navbar'

function Layout({children}) {
  return (
    <div className="px-5 md:10 lg:px-20 bg-gray-800 overflow-x-auto">
        <Navbar/>
      {children}
    </div>
  )
}

export default Layout
