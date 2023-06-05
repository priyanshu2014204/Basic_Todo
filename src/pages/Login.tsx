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
import { Login } from "../api/User.api";
import { useNavigate } from "react-router-dom";

interface forminterface{
  username:string;
  password:string
}

export  const CustomLogin:React.FC = ()=>{
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
    let response:any|boolean =await Login(formvalue)
    // console.log(response)
    if(response){
       navigation("/home")
    }
    // console.log(formvalue)
   }

	return (
		<div>
			<Container>	
				<Content>
					<FlexboxGrid justify="center" style={{ margin: 20 }}>
						<FlexboxGrid.Item colspan={12}>
							<Panel header={<h3>Login</h3>} bordered>
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
												Sign in
											</Button>
											<Button onClick={()=>{
                                                 navigation("/signup")  
											}} appearance="link">
												New User?  
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
