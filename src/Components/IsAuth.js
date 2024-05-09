import React from 'react'
import {isSignedIn} from "../User"
export default function IsAuth({children}) {
    const isLogged = isSignedIn();
  if(isLogged){
    return children;
  }else{
    
    return <p>Not Logged In</p>
  }
}
