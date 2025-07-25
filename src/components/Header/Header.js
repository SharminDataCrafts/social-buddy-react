import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <div>
             <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static">
                    <Toolbar variant="dense">
                   
                    <Typography variant="h5"  color="inherit"  align="center" component="div" sx={{width: "100%" }}>
                        Social Buddy 
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;