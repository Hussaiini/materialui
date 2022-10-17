import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyle =makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root':{
          width:'70%',
       
          margin:theme.spacing(1)
        }
  
    }
  }))
export  function useForm(initialFValues) {
  
    const [values, setValues]= useState(initialFValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e =>{
        const {name, value}= e.target
        
        setValues({
          ...values,
          [name]:value
        
        })
      }
    
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
    
  
}

//FORM WITH SOME DEFINED CSS FOR TEXTFIELD ETC
export  function Form(props) {
   const classes = useStyle()
   const {children, ...other}= props
  return (
    <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
    </form>
  )
}

