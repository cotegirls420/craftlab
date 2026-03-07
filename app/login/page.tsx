
'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [message,setMessage] = useState('')

  const signIn = async (e:any) => {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if(error){
      setMessage(error.message)
    }else{
      window.location.href="/"
    }
  }

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password
    })

    if(error){
      setMessage(error.message)
    }else{
      setMessage("Account created! Now sign in.")
    }
  }

  return (
    <div style={{padding:40,fontFamily:"Arial"}}>

      <h1>CraftLab Login</h1>

      <form onSubmit={signIn}>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Sign In</button>

      </form>

      <br/>

      <button onClick={signUp}>
        Create Owner Account
      </button>

      <p>{message}</p>

    </div>
  )
}
