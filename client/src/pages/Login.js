import React from 'react'

export default function LoginPage() {
  return (
    <div className='App'>
        <div className='card'>
            <p className='login'>Login</p>
            <div className="inputLogin">
                <label htmlFor="email">Email</label>
                <input type='text' Name="email" id="inputMail" placeholder='your mail'></input>
                <label htmlFor="email">password</label>
                <input type='password' Name="name" id="inputName" placeholder='your password'></input>
            <button className='btnLog'>Submit</button>
            </div>  
        </div>


    </div>
  )
}
