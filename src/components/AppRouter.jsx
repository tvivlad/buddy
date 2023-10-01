import React,{useContext} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../routes'
import Registration from '../pages/Registration'
import { Context } from '..'


const AppRouter = () => {
  const {user} = useContext(Context)
  //const isAuth=true
  console.log('пользователь AppRouter isAuth', user.isAuth)
  return (
    <Routes>
      {user.isAuth&&authRoutes.map(({path, Component})=>
        <Route key={path} path={path} element={Component}/>           
      )} 
      {publicRoutes.map(({path, Component})=>
        <Route key={path} path={path} element={Component}/>       
      )}
      <Route path="*" element={<Navigate to={'/auth'} replace/>} />
    </Routes>
  )
}

export default AppRouter