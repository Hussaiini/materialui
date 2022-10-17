import React from 'react'
// import { makeStyles } from '@mui/material'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    sideMenu:{
        backgroundColor:'#253053',
    display:'flex',
    flexDirection:'column',
    position:'absolute',
    left:'0px',
    width:'320px',
    height:'100%',
   //backgroundColor:'#3C25E59',
    },
});
export default function SideMenue() {
    const classes =useStyles();
  return (
    <div className={classes.sideMenu}></div>
  )
}
