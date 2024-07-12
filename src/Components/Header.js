
import React from 'react';
import ReactDOM from 'react-dom/client';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box  ,Container,CssBaseline} from '@mui/material';


function Header() {

    const options = ['The Godfather', 'Pulp Fiction'];

  return (
<React.Fragment>
    <CssBaseline />
    <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100px' }}>


      
        <Stack spacing={2} direction="row">
            <Button variant="contained"> Register</Button>
            <Button variant="outlined">Login</Button>
        </Stack>


       </Box>
    </Container>

    </React.Fragment>
  );
}

export default Header;

