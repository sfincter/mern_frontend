import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('https://mern-frontend-henna-three.vercel.app/login', {
        email,
        password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        navigate('https://mern-frontend-henna-three.vercel.app/dashboard')
        toast.success('Вы успешно вошли в систему')
      }
    } catch (error) {
      
    }
  }

  return (
    <div>
      <form onSubmit={loginUser}>

        <label>Почта</label>
        <input type="text" placeholder='Ваша почта' value ={data.email} onChange={(e) => setData({...data, email: e.target.value})} />

        <label>Пароль</label>
        <input type="text" placeholder='Ваш пароль' value ={data.password} onChange={(e) => setData({...data, password: e.target.value})} />

        <button type='submit'>Войти</button>
      </form>
    </div>
  )
}
