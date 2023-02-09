import { LanguageOutlined, MenuBookOutlined, MoodOutlined, SearchOutlined, SettingsOutlined } from '@mui/icons-material'
import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <input type="text" placeholder='Search' />
            <SearchOutlined className='icon' />
        </div>
        <div className="right">
           <div className='items' >  
            <LanguageOutlined className='icon' />
            <span>English</span>
            </div> 
            {/* menu items */}
            <div className='items' >
                <MoodOutlined className='icon' />
            </div>
            <div className='items' > 
                <MoodOutlined className='icon' />
            </div>
            <div className='items' >
                <MoodOutlined className='icon' />
                <span className='notify' >1</span>
            </div>
            <div className='items' >  
                <MoodOutlined className='icon' />
                <span className='notify' >2</span>
            </div>
            <div className='items' >
                <MenuBookOutlined className='icon' />
            </div>
            {/* avatar */}
            <div className="avatar">
                <img src="" alt="" />
            </div>
            <div className='items' >
                <SettingsOutlined className='icon' />
            </div>
        </div>
    </div>
  )
}

export default Navbar