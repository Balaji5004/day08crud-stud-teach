import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AddStudents({students, setStudent}) {
    const[name, setName] = useState()
    const[qualification, setQualification] = useState()
    const[college, setCollege] = useState()
    const[place, setPlace] = useState()

    const updatestudent = () => {
        const updateobject = {
            name:name,
            qualification:qualification,
            college:college,
            place:place
        }
      setStudent([...students,updateobject])
      setName("")
      setQualification("")
      setCollege("")
      setPlace("")
    }
  return (
    <div className='addstudent-input'>
        <h5 style={{padding:'7px',color:'blue'}}>Add the Student Data to the portal</h5>

      <TextField  type='text' id="outlined-basic" label="Enter Name" variant="outlined"  size="small" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

      <TextField  type='text' id="outlined-basic" label="Enter Qualification" variant="outlined"  size="small" 
      value={qualification}
      onChange={(e)=>setQualification(e.target.value)}
      />

      <TextField  type='text' id="outlined-basic" label="Enter College" variant="outlined"  size="small"
      value={college}
      onChange={(e)=>setCollege(e.target.value)}
      />

      <TextField  type='text' id="outlined-basic" label="Enter place" variant="outlined"  size="small" 
      value={place}
      onChange={(e)=>setPlace(e.target.value)}
      /> {" "}

      <Button variant="contained"
       onClick={updatestudent}
      >
        Add Student</Button>

    </div>
  )
}

export default AddStudents