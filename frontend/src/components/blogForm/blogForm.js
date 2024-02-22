import React from "react";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import BasicSpeedDial from "./blogFields";
import "./blogForm.css"



function BlogForm(){

    const [anchorElUser, setAnchorElUser] = React.useState(null);



    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

    return(
        <>
        <header className="BlogHeader">
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
        </header>
            <BasicSpeedDial />
        </>
    )
}

export default BlogForm