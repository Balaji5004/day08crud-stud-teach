import React, { useState } from 'react'
import Base from '../Base/Base'
import TeachersData from '../Data/TeachersData'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom'
import AddTeachers from './AddTeachers';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateTeacher from './UpdateTeacher';
import SendIcon from '@mui/icons-material/Send';



function Teachers() {
    const [teachers, setTeachers] = useState(TeachersData)
    const [editidx, setEditidx] = useState()
    const history = useHistory()

    const deleteteacher = (teachId) => {
        const remainingteacher = teachers.filter((teach, idx) => teach.id !== teachId)
        setTeachers(remainingteacher)
    }


    return (
        <Base
            title={"Teachers Dashboard"}
        >

            <AddTeachers
                teachers={teachers}
                setTeachers={setTeachers}
            />

            <UpdateTeacher
                teachers={teachers}
                setTeachers={setTeachers}
                editidx={editidx}
            />


            <div className='card-container'>
                {teachers.map((teach, idx) => (
                    <div className='card' key={idx}>
                        <div className='content'>
                            <h3>{teach.name}</h3>
                            <p>{teach.qualification}</p>
                            <p>{teach.subject}</p>
                            <p>{teach.experiance}</p>
                        </div>

                        <div className='control'>
                            <Button variant="contained" endIcon={<SendIcon />} size='small' 
                              onClick={()=>setEditidx(idx)}
                            >Edit
                             </Button>
                            
                             {" "}

                            <Button variant="contained" startIcon={<DeleteIcon />} size='small' color='error'
                                onClick={() => deleteteacher(idx)}
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

export default Teachers