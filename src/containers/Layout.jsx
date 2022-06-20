import React from 'react'
import Header from '@components/Header'

const NavLayout = ( {children} ) => {
  return (
    <div className='Layout'>
      <Header />
      {children}
    </div>
  )
}

export default NavLayout