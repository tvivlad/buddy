import React, { useContext } from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'

const Navigationbar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  //console.log('user navbar ', user.isAuth)
  
  const logOut=()=>{
    user.setUser({})
    user.setIsAuth(false)
    console.log('logout', user.user, ' isAuth ', user.isAuth )
    navigate('/auth', {replace:true})
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#Topics">AudioTrainer</Navbar.Brand>
        <Link to="/topics"></Link>        
        <Nav className="mr-auto">
          <Link to="/topics" style={{color:'white', textDecoration:'none'}} className='ml-3'> Топики</Link>
          <Link to="/statistics" style={{color:'white', textDecoration:'none'}} className='ml-3'>Статистика</Link>
          <Link to="/about" style={{color:'white', textDecoration:'none'}} className='ml-3'>О приложении</Link>
        </Nav>
        {
          user.isAuth?
            <Button
              variant='outline-warning'
              onClick={()=>logOut()}
            >
              Выйти
            </Button>
          :
            <Button
              variant='outline-warning'
              onClick={()=>navigate('/auth', {replace:true})}
            >
              Авторизоваться
            </Button>
        }

      </Navbar>
    </div>
  )
})

export default Navigationbar