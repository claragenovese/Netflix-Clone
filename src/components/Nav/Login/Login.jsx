import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'

export default function Login() {

  const navigate = useNavigate()
  const {user, logOut} = useAuth()

  const isUserLog = user?.email 

  async function handleLogOut(){
    try{
      await logOut()
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      {isUserLog ?
        <button 
          className="logout-btn btn-pointer"
          onClick={handleLogOut}  
        >Log Out</button> :
        <>
          <Link to="/logIn"><button className='login-btn btn-pointer'>Log In</button></Link> 
          <Link to="/signUp"><button className='signup-btn btn-pointer'>Sign Up</button></Link> 
        </>
      }
    </>
  )
}
