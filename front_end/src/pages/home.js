import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8081/api/persons")
        setPersons(result.data)
    }
    const onClickDelete = async (id) => {
        const result = await axios.delete(`http://localhost:8081/api/person/${id}`)
        console.log(result);
        loadUsers()
    }
    return (
        <div className='container'>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{user.id}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className='btn btn-primary mx-2' to={`/viewPerson/${user.id}`}>View </Link>
                                    <Link className='btn btn-outline-primary mx-2' to={`/editPerson/${user.id}`}>Edit </Link>
                                    <button className='btn btn-danger mx-2' onClick={()=>onClickDelete(user.id)}>Delete </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
