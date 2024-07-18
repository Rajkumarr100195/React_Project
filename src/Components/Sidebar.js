
import React from 'react';
import ReactDOM from 'react-dom/client';
import Stack from '@mui/material/Stack';

function SideBar() {

  return (

<div style={myComponentStyle}> 

<div style={innermyComponentStyle}><p> side bar</p></div>

</div>
  );
}

export default SideBar;

const myComponentStyle = {
  
  color: 'blue',
  lineHeight: 10,
  padding: '1.5em',
  background:'#f6f6f6',
  width:'280px',
  height:'100vh'
}

innermyComponentStyle