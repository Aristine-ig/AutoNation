import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='h-screen flex justify-center items-center'>{children}</div>
  )
}

export default Layout