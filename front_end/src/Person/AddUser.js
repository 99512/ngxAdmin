import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

    let navigate=useNavigate();
    const [person, setPersons] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const { firstName, lastName, email } = person;

    const onInputChange = (e) => {
        setPersons({ ...person, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/api/person", person)
        navigate("/")
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register Person</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='firstName' className='from-lable text-start'> First Name</label>
                            <input type={"text"} className='form-control' placeholder='Enter First Name' name='firstName' onChange={(e) => onInputChange(e)} value={firstName} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='lastName' className='from-lable text-start' > First Name</label>
                            <input type={"text"} className='form-control' placeholder='Enter Last Name' name='lastName' onChange={(e) => onInputChange(e)} value={lastName} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='from-lable text-start'> Email</label>
                            <input type={"text"} className='form-control' placeholder='Enter Email' name='email' onChange={(e) => onInputChange(e)} value={email} />
                        </div>
                        <button className='btn btn-outline-primary shadow'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to={"/"}>Cancle</Link>
                    </form>
                </div>

            </div>
        </div>
    )
}
