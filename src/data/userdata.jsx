export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
     {
      field: 'user', 
      headerName: 'User', 
      width: 200,
      renderCell:(params)=>{
        return (
        <div className="cellwrapper">
            <img src={ params.row.img} alt="avatar" />
            <span>{params.row.firstName } {params.row.lastName}</span>
        </div>
        )
      } 
    },
    {
      field: 'status', 
      headerName: 'Status', 
      width: 200,
      renderCell:(params)=>{
        return (
        <div className="cellwrapper">
            <span className={ params.row.status === 'active'? 'status active': 'status passive'}>{params.row.status}</span>
        </div>
        )
      } 
    },
    {
      field: 'action', 
      headerName: '', 
      width: 200,
      renderCell:(params)=>{
        return (
        <div className="cellwrapper">
            <span className="view">View</span>
            <span className="delete">Delete</span>
        </div>
        )
      } 
    },
  ];
  
  export const rows = [
    { id: 1, 
        lastName: 'Snow',  
        firstName: 'Jon', 
        age: 35 ,
        status: 'active',
        img: "https://images.pexels.com/photos/9968415/pexels-photo-9968415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { id: 2, 
        lastName: 'Snow', 
        firstName: 'Jon', 
        age: 35 ,
        status: 'passive', 
        img: "https://images.pexels.com/photos/9968415/pexels-photo-9968415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { id: 3, 
        lastName: 'Snow', 
        firstName: 'Jon', 
        age: 35 ,
        status: 'pending', 
        img: "https://images.pexels.com/photos/9968415/pexels-photo-9968415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ];