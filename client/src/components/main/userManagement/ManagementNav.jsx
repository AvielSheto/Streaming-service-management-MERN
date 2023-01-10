import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
// mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function ManagementNav() {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            navigate('/main/usermanagement/managementnav/users')
        } else {
            navigate('/main/usermanagement/managementnav/adduser')
        }
    };
    
    return (
        <>
            <div className='d-flex justify-content-center'>
                <Box className='col-11 col-md-10'>
                    <Tabs
                        onChange={handleChange}
                        value={value}
                        aria-label="Tabs where each tab needs to be selected manually">
                        <Tab label="All Users" />
                        <Tab label="Add User" />
                    </Tabs>
                </Box>
            </div>
            <Outlet />
        </>
    )
}

export default ManagementNav