import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Dasboard
          </Typography>
          < Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to={'/'}>Home</Link></Button>
          < Button color="inherit"><Link style={{textDecoration:'none',color:'white'}} to={'/form'}>SampleForm</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar