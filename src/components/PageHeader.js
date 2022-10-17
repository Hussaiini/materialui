import React from 'react';
import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import { display } from '@mui/system';
import { Opacity } from '@material-ui/icons';


const useStyles =makeStyles(theme =>({
  root:{
    backgroundColor: '#fdfdff'
  },
  PageHeader:{
    padding:theme.spacing(4),
    display:'flex',
    marginBottom: theme.spacing(2)
  },
  pageIcon:{
    display:"inline-block",
    padding:theme.spacing(2),
    color:'#253053' //#253053
  },
  pagetitle:{
    paddingLeft:theme.spacing(4),
     '& .MuiTypography-subtitle2':{
      opacity:"0.8" 
     }
  }
}))
export default function PageHeader(props) {
    const classes = useStyles();
    const {title, subTitle,icon}=props
  return (
  
    <Paper elevation={0} square className={classes.root}>
    <div className={classes.PageHeader}>
            <Card className={classes.pageIcon}>
                {icon}

            </Card>
 
    <div className={classes.pagetitle}>
      <Typography
      variant="h6"
      component="div"
      >{title}</Typography>
      <Typography
        variant="subtitle2"
        component="div">
          {subTitle}
        </Typography>
         </div>
    </div>
    </Paper>
  

  )
}
