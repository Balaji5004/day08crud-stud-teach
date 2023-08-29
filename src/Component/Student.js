import React, { useState } from 'react'
import Base from '../Base/Base'
import StudentsData from '../Data/StudentsData'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom'
import AddStudents from './AddStudents';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateStudent from './UpdateStudent';
import SendIcon from '@mui/icons-material/Send';

function Student() {
    const [students, setStudent] = useState(StudentsData)
    const [editstudid,setEditstudid] = useState()
    const history =  useHistory()

    const deletestudent = (studId) => {
        const remainingstudent = students.filter((stud,idx)=>idx !==studId)
        setStudent(remainingstudent)
    }
    return (
        <Base
            title={"Students Dashboard"}
        >

           <AddStudents
           students={students}
           setStudent={setStudent}
           />

           <UpdateStudent
           students={students}
           setStudent={setStudent}
           editstudid={editstudid}
           />

            <div className='card-container'>
                {students.map((stud, idx) => (
                    <div className='card' key={idx}>
                        <div className='content'>
                            <h3>{stud.name}</h3>
                            <p>{stud.qualification}</p>
                            <p>{stud.college}</p>
                            <p>{stud.place}</p>
                        </div>

                        <div className='control'>
                            <Button variant="contained" endIcon={<SendIcon />} size='small' 
                              onClick={()=>setEditstudid(idx)}
                            >Edit
                             </Button>
                            {" "}
                            <Button variant="contained" startIcon={<DeleteIcon />} size='small' color='error'
                              onClick={()=>deletestudent(idx)}
                            > Delete
                            </Button>
                        </div>

                    </div>
                ))}


            </div>

            <Button variant="contained" color='warning'
            onClick={() => history.push("/")}
            > Back to Dashboard</Button>

        </Base>
    )
}

export default Student