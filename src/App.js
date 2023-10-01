import { useState, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navigationbar from './components/Navigationbar'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from './index'
import { check } from './http/userAPI'
import React from 'react'

const App = observer(() => {
  console.log('.env :', process.env.REACT_APP_API_URL) //для того чтобы переменная окружения была видна необходимо перезапустить проект
  const [loading, setLoading] = useState(true)
  const { user } = useContext(Context)
  //const u = user.isAuth //для переренеринга
  console.log('app userAuth', user.isAuth)
  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true)
        user.setIsAuth(true)
      })
      .finally(() => setLoading(false))
  }, [])
  if (loading) {
    return <div> Загрузка ...</div>
  }

  return (
    <BrowserRouter>
      <Navigationbar />
      <AppRouter />
    </BrowserRouter>
  )
})

export default App
