import React, { useEffect, useState } from 'react'
import axios from "axios"
import Pro from './Pro'
const url = `http://localhost:2000/profile`


const Profile = () => {

  useEffect(() => {
    document.title = `Profile`
  })
  const [users, setusers] = useState([])

  useEffect(() => {
    axios.get(url).then(users => setusers(users.data))
  }, [])



  return (
    <div className="container">
      {users.map(pro => <Pro id={pro._id} name={pro.username} email={pro.email} phone={pro.phone} key={pro._id}/>
      )}
    </div>
  )
}

export default Profile