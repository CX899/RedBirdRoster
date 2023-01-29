import {Box, Typography} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlined from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../components/Header'
import { mockDataTeam } from '../../data/mockData'
import Navbar from '../global/navbar'
import Leftbar from '../global/leftbar'

const Team = () => {
    const columns = [
        { field: 'id', headerName: 'ID' }, 
        { field: 'name', headerName: 'Name', color:"black", flex: 1, cellClassName: 'name-column--cell'},
        { field: 'age', headerName: 'Age', headerAlign: 'left', align:'left' },
        { field: 'phone', headerName: 'Phone Number', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { 
        field: 'access', 
        headerName: 'Access Level', 
        flex: 1,
        renderCell: ({row: {access}}) => {
            return (
                <Box 
                    width="60%" 
                    m="2px" 
                    display="flex" 
                    backgroundColor={
                    access === 'admin' ? '#3751FF' : 'grey'
                    }
                    borderRadius="4px"
                    padding="5px"
                    alignItems="center"
                    
                >
                {access === 'admin' && <AdminPanelSettingsOutlined />}
                {access === 'user' && <LockOpenOutlinedIcon />}
                {access === 'manager' && <SecurityOutlinedIcon />}
                <Typography color="white" fontSize="14px" sx={{ ml: "5px"}}>
                    {access}
                </Typography>
                </Box>
            )
        },
        },
    ];
  return (
    <div className='app'>
    <Leftbar/>
    <div className='content'>
    <Navbar/>
    <Box m="60px">
        <Header title="Team" subtitle="Managing team members"/>
        <Box m="40px 0 0 0" height="70vh" sx={{
            "& .MuiDataGrid-root": {
                border: "none",
                backgroundColor: "black",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none",
            },
            "& name-column--cell": {
                color: "black",
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "white",
                borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
                color: "black",
            },
            "& .MuiDataGrid-cellContent": {
                color: "black",
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: "white",
            },
            "& .MuiDataGrid-footerContainer": {
                backgroundColor: "white",
                borderTop: "none",
            },
        }}>
            <DataGrid
                rows={mockDataTeam}
                columns={columns}
            />
        </Box>
    </Box>
    </div>
    </div>
  )
}

export default Team