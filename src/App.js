import { Button, Form, FormLayout, Page, TextField } from '@shopify/polaris';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { mapToDispatch, mapToState } from './Action/map';
import './App.css';
import Nav from './component/Nav';
import { useFetch } from './customhooks/Fetch';


function App(props) {
  const nav = useNavigate()
  const [api] = useFetch("https://fbapi.sellernext.com/user/login?")
  const [name,setName] = useState("")
  const [username,setUsername] = useState("")
  const [pass,setPass] = useState("")
  const nameHandler =(e)=>{
    setName(e)
  }
  const usernameHandler =(e)=>{
    setUsername(e)
  }
  const passHandler =(e)=>{
    setPass(e)
  }
  const formHandler =async()=>{
    const endpoint = { username: username, password: pass }
    const ftch = await api._get(endpoint)
    console.log(ftch.data.token)
    if(ftch.success){
    props.formdata({name,username})
    sessionStorage.setItem('name',name)
    sessionStorage.setItem('username',username)
    nav('/nav')
    }
  }
  console.log(props)
  return (
   <Page title='Redux basic'>
    <Routes>
      <Route path='/' element={<Form onSubmit={formHandler}>
      <FormLayout>
        <TextField label="Name" onChange={nameHandler} value={name}/>
        <TextField label="username" onChange={usernameHandler} value={username}/>
        <TextField type='password' label="password" onChange={passHandler} value={pass}/>
        <Button submit>Login</Button>
      </FormLayout>
    </Form>}/>
    <Route path='/nav' element={<Nav />}/>
    </Routes>
    
   </Page>
  );

}

export default connect(mapToState,mapToDispatch)(App);
