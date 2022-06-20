import React from 'react'
import Navbar from '../components/Navbar'

function Layout({children}) {
  return (
    <div className="px-20 bg-gray-800">
        <Navbar/>
      {children}
    </div>
  )
}

export default Layout
