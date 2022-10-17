import React from 'react';
import UsersForm from './UsersForm';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import PageHeader from "../../PageHeader"
import { makeStyles, Paper } from '@material-ui/core';
{/* <PageHeader
title="National Pension Commission"
subTitle="Accrued Rights Computation (Single and Bulk)"
icon={<PeopleOutlineTwoToneIcon fontSize='large'/>}
/> */}

const useStyle =makeStyles(theme =>({
  pageContent:{
          margin:theme.spacing(2), //SPACING BETWEEN 
          padding:theme.spacing(3)
  }
}))
export default function Users() {
  const classes = useStyle();
  return (
    <>
    <PageHeader
    title="National Pension Commission"
    subTitle="Create/Maintain Users"
    icon={<PeopleOutlineTwoToneIcon fontSize='large'/>}
    />
    <Paper className={classes.pageContent}>
  <UsersForm/>
  </Paper>
  </>
  )
}
