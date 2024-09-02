import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { signOutUser } from '../utilities/firebase'

function SignOutPage() {
    const [loggedIn, setLoggedIn] = useState(false)
    

    
  useEffect(()=> {
    signOutUser().then((res)=> {
        localStorage.removeItem("user");
        setLoggedIn(true)
    })

  }, [])
  return (
    <>
     {loggedIn ? <Navigate to={"/"} /> : <div>Loading......</div> }
      
    </>
  );
}

export default SignOutPage