import React,{useState,useContext, } from 'react'
import {Modal, Button, Form, Row, Container,Card} from 'react-bootstrap'
import { Context } from '../index'
import {login} from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'


const Auth = observer(() => {
  const navigate= useNavigate()
  const {user} =useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userAuth=async()=>{
    try{
      const userData= await login(email, password)
      user.setUser(userData)
      user.setIsAuth(true)
      //console.log('данные из стора user ', user.isAuth)

      navigate('/about', {replace:true})
    } catch (e){
      alert(e.response.data.message)
    }
  }

  return (
    <Container className='d-flex mt-5 justify-content-center align-items-center'>
      <Card border="warning" style={{ width: '28rem' }} className=''>
        <Card.Header>Авторизация</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <Form className='d-flex flex-column'>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Введите Ваш email" 
                  value={email}
                  onChange={e=> setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Введите Ваш пароль" 
                  value={password}
                  onChange={e=> setPassword(e.target.value)}
                />
              </Form.Group>
              <Button 
                variant="warning" 
                className='mt-2 align-self-end'
                onClick={userAuth}
              >
                Авторизоваться
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>




    </Container>

  )
})

export default Auth