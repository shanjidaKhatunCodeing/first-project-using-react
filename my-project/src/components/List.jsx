import React from 'react'

const List = ({href, text}) => {
  return (
    <li>
        <a className='font-pop text-2xl font-semibold list-none' href={href}>{text}</a>
    </li>
  )
}

export default List