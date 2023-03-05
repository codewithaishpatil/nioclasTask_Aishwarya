import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{}}>
                            Mathematics Questions
                        </Typography>


                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} pl={7} >
                            <Button color="inherit"  >
                            <Link to="/" style={{textDecoration:"none" ,color:"white"}} >
                                Home
                                </Link></Button>
                        </Typography>

                    </Toolbar>
                </AppBar>
            </Box>
            </>
    );
}

export default Navbar;