import React, { useReducer, useState } from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { FileUploadOutlined } from '@mui/icons-material'
import { formReducer, INITIAL_STATE } from '../../reducers/formReducer'

const New = () => {

    const [dispatch] = useReducer(formReducer, INITIAL_STATE)
    const [selected, setselected] = useState([])

    const handleChange = (e) => {
      dispatch({ type: "CHANGE_INPUT", payload: { name: e.target.name, value: e.target.value } });
     
    };

      const categories = [{ name: 'cars'}, {name: 'computer'}, {name: 'electronics' }]

      const handleCategoryChange = (e) => {
          let choices = []
         for (let i=0; i < e.target.selectedOptions.length; i++ ){
          choices.push(e.target.selectedOptions[i].value)
         }
         setselected(choices)
         dispatch({ type: "CHANGE_CATEGORIES", payload: { name: e.target.name, value: choices } });
          
      }
  return (
    <div className='new' >
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="wrapper">
        <div className="add">
          <span>Add New User</span>
        </div>
        <div className="inputfields">
          <div className="left">
            <img src="https://images.pexels.com/photos/9968415/pexels-photo-9968415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
          </div>
          <div className="right">
          <div className="textfield">
              <label htmlFor="file" >Image: <FileUploadOutlined  /></label>
              <input type="file" style={{ display: 'none' }} id="file" name='file' />
            </div>
            <div className="textfield">
              <label htmlFor="">Username</label>
              <input type="text" name='username' onChange={handleChange} />
            </div>
            <div className="textfield">
              <label htmlFor="">Name and surname</label>
              <input type="text" name='fullname'/>
            </div>
            <div className="textfield">
              <label htmlFor="">Email</label>
              <input type="text" name='email'/>
            </div>
            <div className="textfield">
              <label htmlFor="">Phone</label>
              <input type="text" name='phone' />
            </div>
            <div className="textfield">
              <label htmlFor="">Password</label>
              <input type="password" name='password' />
            </div>
            <div className="textfield">
              <label htmlFor="">Address</label>
              <input type="text" name='address' />
            </div>
            <div className="textfield">
              <label htmlFor="">Country</label>
              <input type="text" name='country' />
            </div>
            <div className="textfield">
              <label htmlFor="">Categories</label>
              <select 
              multiple
              onChange={handleCategoryChange} 
              name="categories"   
              >
                { categories.map((category,i) => (
                  <option key={i} 
                  value={category.name} 
                  selected={selected.includes(category.name)}
                   >{category.name}</option>
                )) }
                
              </select>
            </div>
            <span className="button">Send</span>
          </div>        
        </div>
        </div>   
      </div>
    </div>
  )
}

export default New