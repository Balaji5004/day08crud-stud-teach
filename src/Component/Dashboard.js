import React from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';

function Dashboard() {
    const history = useHistory()
    return (
        <Base
            title={"DashBoard"}
            description={"welcome to students and Teachers Management Portal"}
        >
            <div className='btn-base'>
                
                <Button variant="contained" color="success"
                    onClick={() => history.push("/students")}
                >
                    Go to Students Page
                </Button>

                <Button variant="contained" color="success"
                    onClick={() => history.push("/teachers")}>
                    Go To Teachers Page
                </Button>

            </div>
        </Base>
    )
}

export default Dashboard