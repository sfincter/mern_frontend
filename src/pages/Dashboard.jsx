import { useContext } from "react";
import { UserContext } from "../../context/userContext";

import React from 'react'

export default function Dashboard() {
    const {user} = useContext(UserContext)
  return (
    <div>
      <h1>Личный кабинет</h1>
      <>
        {!!user && (<h2>Здравствуйте {user.name}!</h2>)}
      </>
    </div>
  )
}
