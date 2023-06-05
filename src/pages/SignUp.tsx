import React, { useState } from "react";
import {
	Container,
	Header,
	Content,
	Nav,
	Navbar,
	FlexboxGrid,
	Panel,
	Form,
	ButtonToolbar,
	Button, 
	Footer,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Login, Register } from "../api/User.api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface forminterface{
  username:string;
  password:string
}

export  const CustomSignUp:React.FC = ()=>{
  const [formvalue,SetFormValue] = useState<forminterface>({
    username:"",
    password:""
  })
const navigation=useNavigate()
  const handleFormChange = (a:any)=>{
    SetFormValue(a)
  }

   const handleformSubmit = async ()=>{
    // Login(1)
    // console.log(Login)
	if(formvalue.password.length<5 || formvalue.username.length<5){
		toast.error("Password and Username must be greater than length 5")
	}else{
	 const bool= await Register(formvalue.username,formvalue.password)
	 if(bool){
		toast.success("Registered Successfully Please login");
		navigation("/login")
	 }
	}
    // let response:any|boolean =await Login(formvalue)
    // // console.log(response)
    // if(response){
    //    navigation("/home")
    // }
    // console.log(formvalue)
   }

	return (
		<div>
			<Container>	
				<Content>
					<FlexboxGrid justify="center" style={{ margin: 20 }}>
						<FlexboxGrid.Item colspan={12}>
							<Panel header={<h3>Sign Up</h3>} bordered>
								<Form fluid  onChange={handleFormChange} onSubmit={handleformSubmit} formValue={formvalue}>
									<Form.Group>
										<Form.ControlLabel>
											Email
										</Form.ControlLabel>
										<Form.Control name="username"
                    type="any"
										accept='true'/>
									</Form.Group>
									<Form.Group>
										<Form.ControlLabel>
											Password
										</Form.ControlLabel>
										<Form.Control name="password"
											type="password" />
									</Form.Group>
									<Form.Group>
										<ButtonToolbar>
											<Button type='submit' appearance="primary"
												color="blue">
												Sign Up
											</Button>
											<Button appearance="link">
												Existing User?   
											</Button>
										</ButtonToolbar>
									</Form.Group>
								</Form>
							</Panel>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</Content>
			</Container>
		</div>
	);
}
