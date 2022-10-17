import {  Grid, } from '@material-ui/core'

import React, {useState, useEffect} from 'react'

import Controls from '../../controls/Controls'
import {useForm,Form} from '../../useForm'

import * as userService from '../../../services/userService'
const genderItems =[
  {id:'male', title: 'Male'},
  {id:'female', title: 'Female'},
]
const initialFValues ={
  id:0,
  fullName:'',
  email:'',

  // department:'',
  gender:'male',
  city:'',
  mobile:'',
  departmentId:'',
  hireDate:new Date(),
  city:'',
  isPermanent:false //This will be checkbox

}
export default function UsersForm() {
  // const [values, setValues]= useState(initialFValues) 
  //To initialize the values and use in textfield or other components

  const validate=()=>{
      let temp ={
        
      }
      temp.fullName=values.fullName?"":"This is requied"
      // temp.email=(/$|.+@..+/).test(values.email)?"":"Email is not valid"
      // temp.mobile=values.mobile.length>9?"":"Minimum 10 numbers required"
      // temp.departmentId=values.departmentId.length!=0?"":"This is requied"
      setErrors({
        ...temp
      })

      return Object.values(temp).every(x => x = "")


  }
  const{
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  }= useForm(initialFValues) //useForm is  from useForm.js
  
  // const [errors, setErrors] = useState({})

const handleSubmit=(e)=>{
  e.preventDefault()
  if(validate()){
  window.alert("i am working")
  }
}
  return (

      <Form onSubmit ={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
      
          <Controls.Input
          name="fullName"
          label="Full Name"
          value={values.fullName}
          onChange={handleInputChange}
          
          />
<Controls.Input
       
          label="Email"
          name ="email"
          value={values.email} 
          onChange ={handleInputChange}
          />
          <Controls.Input
       
       label="Mobile"
       name ="mobile"
       value={values.mobile} 
       onChange ={handleInputChange}
       />

<Controls.Input
       
       label="City"
       name ="city"
       value={values.city} 
       onChange ={handleInputChange}
       />
                {/* <Controls.Input
          name="City"
          label="city"
          value={values.city}
          onChange={handleInputChange}/> */}
        </Grid>
        <Grid item xs={6}> 
        <Controls.RadioGroups
          name="gender"
          label="Gender"
          value={values.gender}
          onChange={handleInputChange}
          items={genderItems}
          />
          {/* <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row={true}
            name ="gender"
             value={values.gender} 
             onChange ={handleInputChange}>
              <FormControlLabel value="male" control={<Radio/>} label="Male"/>
              <FormControlLabel value="female" control={<Radio/>} label="Female"/>
              
            </RadioGroup>
          </FormControl> */}
          <Controls.Select
          name ="departmentId"
          label="Department"
          value={values.departmentId}
          onChange={handleInputChange}
          options={userService.getDepartmentCollection()}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
            />
          <Controls.Checkbox
          name ="isPermanent"
          label="Permanent User"
          value={values.isPermanent}
          onChange={handleInputChange}
          />

          <div>
            <Controls.Button
            type="submit"
            text="Submit" />

<Controls.Button
           color="default"
           type="submit"
            text="Reset" />
          </div>
        </Grid>
      </Grid>
      </Form>
    
  )
}
