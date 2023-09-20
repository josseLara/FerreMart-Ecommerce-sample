import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

export const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = ( e ) => {
    e.preventDefault()
    dispatch( authActions.login() )
  }
  return (
    <>
      <section className='login'>
          <h1>Login</h1>
        <div className='container'>
          <form onSubmit={handleSubmit}>
            <span>Username or Email address</span>
            <input type='text' required />
            <span>Password * </span>
            <input type='password' required />
            <button className='button'>Log in </button>
          </form>
        </div>
      </section>
    </>
  )
}
