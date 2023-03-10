import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table'


const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type='user' />
          <Widget type='orders' />
          <Widget type='user' />
          <Widget type='user' />
        </div>
        <div className="charts">
          <Featured/>
          <Chart  height={312}/>
        </div>
        <div className="tableContainer">
          <span>User Transaction</span>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home