import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { rows } from '../../data/homeUser';
import './table.scss'
function List() {

  return (
    <TableContainer component={Paper} className="table" >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tablecell'>Tracking Id</TableCell>
          <TableCell className='tablecell'>Product</TableCell>
          <TableCell className='tablecell'>Customer</TableCell>
          <TableCell className='tablecell'>Date</TableCell>
          <TableCell className='tablecell'>Amount</TableCell>
          <TableCell className='tablecell'>Payment Method</TableCell>
          <TableCell className='tablecell'>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell className='tablecell'>{row.id}</TableCell>
            <TableCell className='tablecell'>
              <div className="cellwrapper">
                <img src={row.img} alt="" />
                <span>{row.product}</span>
              </div>
            </TableCell>
            <TableCell className='tablecell'>{row.customer}</TableCell>
            <TableCell className='tablecell'>{row.date}</TableCell>
            <TableCell className='tablecell'>{row.amount}</TableCell>
            <TableCell className='tablecell'>{row.method}</TableCell>
            <TableCell className='tablecell'>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List

