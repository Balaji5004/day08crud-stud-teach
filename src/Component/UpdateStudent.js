import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Base from '../Base/Base';

function UpdateStudent({students,setStudent,editstudid}) {
   
    const[name, setName] = useState()
    const[qualification, setQualification] = useState()
    const[college, setCollege] = useState("")
    const[place, setPlace] = useState("")

    
    useEffect (() => {  
        const editstudent = students[editstudid]
        setName(editstudent?.name)
        setQualification(editstudent?.qualification)
        setCollege(editstudent?.college)
        setPlace(editstudent?.place)
    },[students,editstudid])


    const neweditstudent = () => {
        const editstudobject = {
            name:name,
            qualification:qualification,
            college:college,
            place:place
        }
        students[editstudid] = editstudobject
        setStudent([...students])
    }


  return (
    <Base>
    <div className='updatestudent-input'>
    <h5 style={{ padding: '7px',color:'royalblue' }}>Edit the Students Details to the portal</h5>

    <TextField type='text' id="outlined-basic"  variant="outlined" size="small"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />

    <TextField type='text' id="outlined-basic"  variant="outlined" size="small"
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
    />

    <TextField type='text' id="outlined-basic"  variant="outlined" size="small"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
    />

    <TextField type='text' id="outlined-basic"  variant="outlined" size="small"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
    /> {" "}

    <Button variant="contained" 
        onClick={neweditstudent}
    >
        Update Students details</Button>

</div>
</Base>

  )
}

export default UpdateStudent