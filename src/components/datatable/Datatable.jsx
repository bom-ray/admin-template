import React from 'react'
import { DataGrid} from '@mui/x-data-grid';
import './datatable.scss'
import { columns, rows } from '../../data/userdata'
function Datatable() {

  return (
    <div className='dataTable' style={{ height: 400, width: '100%' }}>
     <div className="top">
        <span className="title">Customer</span>
        <span className="addbutton">Add User</span>
     </div>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  )
}

export default Datatable