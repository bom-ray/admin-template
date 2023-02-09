import { ArrowUpwardOutlined, Person2Outlined } from '@mui/icons-material'
import React from 'react'
import './widget.scss'

const Widget = ({ type }) => {
  let data = {}
  switch (type) {
    case 'user':
      data = {
        title:  'USER',
        quantity: 300,
        link: 'See all users',
        icon: <Person2Outlined className='icon' style={{ color: 'crimson', backgroundColor: 'red' }} />
      }     
      break;
    case 'orders':
      data = {
        title:  'ORDERS',
        quantity: 300,
        link: 'See all orders',
        icon: <Person2Outlined className='icon' style={{ color: 'orange', backgroundColor: 'yellow' }} />
      }     
      break;
    case 'products':
      data = {
        title:  'USER',
        quantity: 300,
        link: 'See all users',
        icon: <Person2Outlined className='icon' style={{ color: 'lightgreen', backgroundColor: 'green' }} />
      }     
      break;
    case 'movies':
      data = {
        title:  'USER',
        quantity: 300,
        link: 'See all users',
        icon: <Person2Outlined className='icon' style={{ color: 'crimson', backgroundColor: 'red' }} />
      }     
      break;
    default:
      break;
  }
  return (
    <div className='widget' >
        <div className="left">
            <span className='title' >{data.title}</span>
            <span className='quantity' >{data.quantity}</span>
            <span className='link' >{data.link}</span>
        </div>
        <div className="right">
            <div className="top">
                <ArrowUpwardOutlined className='percent positive' />
                <span>2 %</span>
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget