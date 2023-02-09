import React from 'react'
import './sidebar.scss'
import { DashboardOutlined, PersonOutlined } from '@mui/icons-material'
const Sidebar = () => {
  return (
    <div className='sidebar' >
        <div className="top">
            <span className='logo' >lamadmin</span>
        </div>
        <div className="center">
          <span className="title">MAIN</span>
            <div className="item text">
               <DashboardOutlined  className='icon'/> 
               <span>Dashboard</span>
            </div>
            {/* user */}
            <span className="title">USER</span>
            <div className="item">
               <PersonOutlined  className='icon'/> 
               <span>User</span>
            </div>
            <div className="item">
               <PersonOutlined  className='icon'/> 
               <span>Products</span>
            </div>
            <div className="item">
               <DashboardOutlined  className='icon'/> 
               <span>Orders</span>
            </div>
            <div className="item">
               <DashboardOutlined  className='icon'/> 
               <span>Delivery</span>
            </div>
            {/* list */}
            <span className="title">USER</span>
            <div className="item">
               <DashboardOutlined  className='icon'/> 
               <span>Stats</span>
            </div>
            <div className="item">
               <DashboardOutlined  className='icon'/> 
               <span>Notifications</span>
            </div>
            {/* useful */}
            <span className="title">USER</span>
            <div className="item">
               <DashboardOutlined  className='icon'/> 
               <span>System Health</span>
            </div>
            <div className="item">
               <DashboardOutlined  className='icon'/> 
               <span>Log</span>
            </div>
            <div className="item">
               <DashboardOutlined  className='icon'/> 
               <span>Setting</span>
            </div>
            {/* service */}
            <span className="title">USER</span>
            <div className="item">
               <DashboardOutlined  className='icon'/> 
               <span>Profile</span>
            </div>
            <div className="item">
               <DashboardOutlined  className='icon'/> 
               <span>Logout</span>
            </div>
        </div>
        <div className="bottom">
          <span>THEME</span>
          <div className="themes">
          <div className='theme' ></div>
          <div className='theme' ></div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar