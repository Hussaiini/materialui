import React from 'react'

import {
    AppBar,
    Toolbar,
    Grid,
    IconButton,
    InputBase,
    Badge,
    makeStyles,
    TextField,
  } from '@material-ui/core';
  import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
  import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
  import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
  import AdbIcon from '@mui/icons-material/Adb';
  import SearchIcon from '@mui/icons-material/Search';
  import { Link } from 'react-router-dom';
  import Typography from '@mui/material/Typography';
  
  const useStyles = makeStyles({
    root: {
      backgroundColor: '#fff',
      transform: 'translateZ(0)',
      height:'50px',
      paddingTop:'0px',
      paddingBottom:'0px',
    },
    searchInput: {
      opacity: '0.6',
      padding: '0px 8px',
      fontSize: '0.8rem',
      '&:hover': {
        backgroundColor: '#f2f2f2',
      },
      '& .MuiSvgIcon-root': {
        marginRight: '8px',
      },
    },
    btnRoot: {
      backgroundColor: 'green',
    },
    btnLabel: {
      backgroundColor: 'red',
    },
  });
  //position="static" FROM APP BAR
  export default function Header() {
    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Administration', 'Account', 'Dashboard', 'Logout'];
  
    const classes = useStyles();
    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center">
                     <Grid item sm={7}>
              <TextField
                variant="standard"
                size="large"
               // label="ID"
                value="347"
                color="primary"
                focused
              />
  
              <TextField
              //  label="NAME"
                value="Hussaini Gambo"
                color="secondary"
                focused
              />
            </Grid>
            <Grid item sm ></Grid>
            <Grid item>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNoneIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="primary">
                  <ChatBubbleOutlineIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <PowerSettingsNewIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
