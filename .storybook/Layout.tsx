import React from 'react'
import '../styles/tailwind.css'

const Layout: React.FC = ({ children }) => {
  return <div className="p-4">{children}</div>
}

export default Layout
