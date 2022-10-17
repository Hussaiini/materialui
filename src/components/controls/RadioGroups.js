import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@material-ui/core';
import React from 'react'

export default function RadioGroups(props) {
    const {name, label, value, onChange, items}= props;
  return (
    <FormControl>
    <FormLabel>{label}</FormLabel>
    <MuiRadioGroup row={true}
    name ={name}
     value={value} 
     onChange ={onChange}>
        {
            items.map(
                (item)=>(
                    <FormControlLabel key ={item.id} value={item.id} control={<Radio/>} label={item.title}/>
                )
            )
        }
      {/* <FormControlLabel value="male" control={<Radio/>} label="Male"/>
      <FormControlLabel value="female" control={<Radio/>} label="Female"/> */}
      
    </MuiRadioGroup>
  </FormControl>
  )
}
