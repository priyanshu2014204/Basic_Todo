import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Avatar, InputGroup, Input, IconButton, Form, SelectPicker } from 'rsuite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import HomeIcon from '@rsuite/icons/legacy/Home'; 
import { myprofile } from '../api/User.api';
import { useNavigate } from 'react-router-dom';
 
const CustomNavBar = () => {
  const [username,SetUserName]=useState('ememy')
  const navigate=useNavigate()
useEffect(()=>{
  async  function fetchfun(){
    const response=await  myprofile(SetUserName)
    // if(response?.response){
    //   SetUserName(response.username || username)
    // }
 }
 fetchfun()
},[])

  return (
    <Navbar >
    <Navbar.Brand href="#">
      <img
        style={{
          width: 20
        }}
        src='https://media.licdn.com/dms/image/C560BAQEP48KeRuB3VA/company-logo_200_200/0/1674571066627?e=2147483647&v=beta&t=m7slXkhDpIo4nzaVYa3jF-Aq5kW4VLLfA0bjogbvrx4' /></Navbar.Brand>
    <Nav  activeKey={1}>
      <Nav.Item eventKey="1" icon={<HomeIcon/>}>
        Home
      </Nav.Item>
    </Nav>
    <Nav pullRight>
      <Nav.Menu title={username} icon={<Avatar circle src="https://avatars.githubusercontent.com/u/12592949" alt="@superman66" />}>
        <Nav.Item eventKey="4"><span>Profile</span>
          <FontAwesomeIcon icon={faUser} style={{
            marginLeft:20
          }}/>
        </Nav.Item>
        <Nav.Item eventKey="5"
          onClick={()=>{
            localStorage.removeItem("task_manager_token");
            navigate("/login")
          }}
        ><span>Log out</span>
          <FontAwesomeIcon icon={faSignOutAlt} style={{
            marginLeft:20
          }}/>
        </Nav.Item>
      </Nav.Menu>
    </Nav>
  </Navbar>
  )
}

export default CustomNavBar
