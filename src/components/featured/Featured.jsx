import { ArrowDownwardOutlined, ThreeDRotationOutlined } from '@mui/icons-material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import './featured.scss'
function Featured() {
  return (
    <div className='featured' >
      <div className="top">
        <span className="title">Total Revenue</span>
        <ThreeDRotationOutlined className='menu' />
      </div>
      <div className="center">
        <CircularProgressbar className='progress' value={70} text={'70%'} strokeWidth={3} />
        <span className="title">Total sales made today</span>
        <span className="amount">$420</span>
        <span className="desc">animate the progressbar only when it becomes visib use something like reay-sensor</span>
      </div>
      <div className="bottom">
        <div className="percentwrapper">
          <span className="title">Target</span>
          <div className="percent">
            <ArrowDownwardOutlined className='icon' />
            <span className="percentamount">$23k</span>
          </div>    
        </div>
        <div className="percentwrapper">
          <span className="title">Target</span>
          <div className="percent">
            <ArrowDownwardOutlined className='icon' />
            <span className="percentamount">$23k</span>
          </div>    
        </div>
        <div className="percentwrapper">
          <span className="title">Target</span>
          <div className="percent">
            <ArrowDownwardOutlined className='icon' />
            <span className="percentamount">$23k</span>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default Featured