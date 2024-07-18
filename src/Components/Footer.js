
import React from 'react';
import ReactDOM from 'react-dom/client';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box  ,Container,CssBaseline} from '@mui/material';


function Footer() {

    const options = ['The Godfather', 'Pulp Fiction'];

  return (

    <footer class="footer mt-auto py-3 bg-body-tertiary" style={cardStyles.container}>
  <div class="container">
    <span class="text-body-secondary">Place sticky footer content here.</span>
  </div>
</footer>
  );
}

export default Footer;


const cardStyles = {
  container: {
    position: 'fixed',
    right: '0px',
    bottom: '0px',
    width:'100%',
    zIndex:'2',
    textAlign:'left',
  },
 
};