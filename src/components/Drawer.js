import * as React from 'react';
import { Drawer, Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectToggle } from '../app/redux/toggleSlice';
import { useDispatch } from 'react-redux';
import { toggle } from '../app/redux/toggleSlice';
import logo from '../logo.png';

function SideDrawer() {
  const toggleIn = useSelector(selectToggle);
  const dispatch = useDispatch();
  return (
    <Drawer
      anchor='left'
      open={toggleIn}
      onClose={() => dispatch(toggle())}
      style={{ zIndex: 0 }}
    >
      <Box p={2} width='250px' textAlign='center' role='presentation'
      // onClick={() => dispatch(toggle())}
      >
        <Typography variant='h6' component='div'>
          Menu
        </Typography>
        <img src={logo} className="App-logo" alt="logo" />
      </Box>
    </Drawer>
  )
}

export default SideDrawer;