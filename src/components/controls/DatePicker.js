import React from 'react'
import {MuiPickersUtilsProvider , KeyboardDatePicker} from "@material-ui/pickers"
import dateFnsUtils from "@date-io/date-fns"
export default function DatePicker(props) {
    const {name, label, value, onChange} = props
    const convertToDefaultEventPara = (name, value)=>({
      target:{
          name, value
      }
  })
  return (
    <MuiPickersUtilsProvider  utils={dateFnsUtils}>
           <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined" 
           label={label}
           format ="MMM/dd/yyyy"
           value={value}
           name ={name}
           onChange={date =>onChange(convertToDefaultEventPara(name, date))}
           />
            
    </MuiPickersUtilsProvider>
  )
}
