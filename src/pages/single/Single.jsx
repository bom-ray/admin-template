import React from 'react'
import './single.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single' >
       <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="wrapper">
        <div className="top">
          <div className="left">
          <span className='btn' >Edit</span>
          <p className="header">Information</p>
          <div className="wrapper">
          <div className="image">
            <img src="https://images.pexels.com/photos/9968415/pexels-photo-9968415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="detail">
            <p className="title">Jane Doe</p>
            <div className="item">
              <span className="itemkey">Email:</span>
              <span className="itemvalue">jack@yahoo.com</span>
            </div>
            <div className="item">
              <span className="itemkey">Phone:</span>
              <span className="itemvalue">+234 874 344</span>
            </div>
            <div className="item">
              <span className="itemkey">Address:</span>
              <span className="itemvalue">Elton St 42 Garden Newyork</span>
            </div>
            <div className="item">
              <span className="itemkey">Country:</span>
              <span className="itemvalue">USA</span>
            </div>
          </div>
          </div>
          </div>
          <div className="right">
          <Chart height={235} />
          </div>
        </div>
        <div className="tablewrapper">
        <span className="tablehead">Last Transactions</span>
        <Table/>
        </div>

       
        </div>
       
      </div>
    </div>
  )
}

export default Single