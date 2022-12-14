import * as React from 'react';
import { Drawer, Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectToggle } from '../features/toggle/toggleSlice';
import { useDispatch } from 'react-redux';
import { toggle } from '../features/toggle/toggleSlice';


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
      </Box>
    </Drawer>
  )
}

export default SideDrawer;