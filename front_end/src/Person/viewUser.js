import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function ViewUser() {
  const [person, setPersons] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  useEffect(() => {
    loadUsers();
  }, []);

  const { id } = useParams();

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8081/api/person/${id}`)
    setPersons(result.data)
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>View Person</h2>
          <br />
          First Name : {person.firstName}  <br />
          Last Name: {person.lastName}  <br />
          Email : {person.email}  <br /><br />
          <Link className='btn btn-outline-primary mx-2' to={"/"}>Back</Link>
        </div>

      </div>
    </div>
  )
}
