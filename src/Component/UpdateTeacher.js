import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Base from '../Base/Base';

function UpdateTeacher({teachers, setTeachers,editidx}) {
   
    const[name, setName] = useState()
    const[qualification, setQualification] = useState()
    const[subject, setSubject] = useState("")
    const[experiance, setExperiance] = useState("")

    
    useEffect (() => {  
        const editteacher = teachers[editidx]
        setName(editteacher?.name)
        setQualification(editteacher?.qualification)
        setSubject(editteacher?.subject)
        setExperiance(editteacher?.experiance)
    },[teachers,editidx])


    const neweditteacher = () => {
        const editteachobject = {
            name:name,
            qualification:qualification,
            subject:subject,
            experiance:experiance
        }
        teachers[editidx] = editteachobject
        setTeachers([...teachers])
    }


  return (
    <Base>
    <div className='updatestudent-input'>
    <h5 style={{ padding: '7px',color:'royalblue' }}>Edit the Teachers Details to the portal</h5>

    <TextField type='text' id="outlined-basic"  variant="outlined" size="small"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />

    <TextField type='text' id="outlined-basic"  variant="outlined" size="small"
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
    />

    <TextField type='text' id="outlined-basic"  variant="outlined" size="small"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
    />

    <TextField type='text' id="outlined-basic"  variant="outlined" size="small"
        value={experiance}
        onChange={(e) => setExperiance(e.target.value)}
    /> {" "}

    <Button variant="contained" 
        onClick={neweditteacher}
    >
        Update Teacher details</Button>

</div>
</Base>

  )
}

export default UpdateTeacher