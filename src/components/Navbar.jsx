import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to='/'>Главная</Link> <br></br>
        <Link to='/register'>Регистрация</Link> <br></br>
        <Link to='/login'>Войти</Link> <br></br>
      </nav>
    </div>
  )
}
