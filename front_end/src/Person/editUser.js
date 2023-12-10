import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate = useNavigate();
    const [person, setPersons] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    useEffect(() => {
        loadUsers();
    }, []);

    const { id } = useParams();
    const { firstName, lastName, email } = person;

    const onInputChange = (e) => {
        setPersons({ ...person, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        person.id = id;
        await axios.post("http://localhost:8081/api/person", person)
        navigate("/")
    }
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:8081/api/person/${id}`)
        setPersons(result.data)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit Person</h2>
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
