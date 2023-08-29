import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function AddTeachers({ teachers, setTeachers}) {
    const[name, setName] = useState()
    const[qualification, setQualification] = useState()
    const[subject, setSubject] = useState("")
    const[experiance, setExperiance] = useState("")

    const updateteacher = () => {
        const updateobject = {
            name:name,
            qualification:qualification,
            subject:subject,
            experiance:experiance
        }
      setTeachers([...teachers,updateobject])
      setName("")
      setQualification("")
      setSubject("")
      setExperiance("")
    }

    return (

        <div className='addstudent-input'>
            <h5 style={{ padding: '7px',color:'royalblue' }}>Add the Teachers Details to the portal</h5>

            <TextField type='text' id="outlined-basic" label="Enter Name" variant="outlined" size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <TextField type='text' id="outlined-basic" label="Enter Qualification" variant="outlined" size="small"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
            />

            <TextField type='text' id="outlined-basic" label="Enter Subject" variant="outlined" size="small"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />

            <TextField type='text' id="outlined-basic" label="Enter Experiance" variant="outlined" size="small"
                value={experiance}
                onChange={(e) => setExperiance(e.target.value)}
            /> {" "}

            <Button variant="contained" 
                onClick={updateteacher}
            >
                Add Teacher details</Button>

        </div>

    )
}

export default AddTeachers