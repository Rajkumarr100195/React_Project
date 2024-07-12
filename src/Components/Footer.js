
import React from 'react';
import ReactDOM from 'react-dom/client';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box  ,Container,CssBaseline} from '@mui/material';


function Footer() {

    const options = ['The Godfather', 'Pulp Fiction'];

  return (
<React.Fragment>
    <CssBaseline />
    <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100px' }}>


           <p> Footer</p>


       </Box>
    </Container>

    </React.Fragment>
  );
}

export default Footer;

