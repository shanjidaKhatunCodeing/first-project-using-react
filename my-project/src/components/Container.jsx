import React from 'react'

const Container = ({children, style}) => {
  return (
    <div className={style}>{children}</div>
  )
}

export default Container