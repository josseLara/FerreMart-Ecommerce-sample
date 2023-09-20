import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(null)
  }

  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    dispatch(authActions.logout())
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://cdn-icons-png.flaticon.com/512/145/145843.png' alt='' />
            </button>

            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <div className='image'>
                  <Link to='/account'>
                    <div className='img'>
                      <img src='https://cdn-icons-png.flaticon.com/512/145/145843.png' alt='' />
                    </div>
                  </Link>
                  <div className='text'>
                    <h4>Max Roller</h4>
                    <label htmlFor=''>Los Angeles,CA</label>
                  </div>
                </div>
                <Link to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>Mi Cuenta</h4>
                  </button>
                </Link>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>Mi Orden</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
              nav    <h4>Lista de deseos</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Ayuda</h4>
                </button>
                <button className='box' onClick={logoutHandler}>
                  <BiLogOut className='icon' />
                  <h4>Cerrar sesión</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
