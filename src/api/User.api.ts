import { BASEURL } from "./api";
import { toast } from 'react-toastify';

export async function Login(formdata: any) {
  let bool=false
        let data = await fetch(`${BASEURL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata)
        }).then((response) => {
            // Check if the response was successful (status code between 200 and 299)
            if (response.ok) {
              return response.text();
            } else {
             toast.error("something went wrong")
              throw new Error('Network response was not successful.');
            }
          })
          .then((data) => {
            // Store the response data in localStorage
            toast.success("login successfully e")
            localStorage.setItem("task_manager_token", data);
            bool= true
          })
          .catch((error) => {
            // Handle any errors
            console.error("Error:", error);
          });
          return bool
    
}


export async function myprofile(setstate?:any){
   let bool=false
        const tokenString = localStorage.getItem("task_manager_token");
        const token = tokenString ? JSON.parse(tokenString) : null;
        let data = await fetch(`${BASEURL}/user/myprofile`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "authorization":`bearer ${token?.token || 'a'}`
              },
        }).then((response) => {
            if (response.ok) {
                bool=true
              return response.json();
            } else {
              throw new Error('Network response was not ok.');
            }
          })
          .then((data) => {

           if(setstate) setstate(data.username)

          })
          .catch((error) => {
            // Handle any errors
          });
          return bool
}

export async function Register(username:string,password:string) {
    try {
        let data = await fetch(`${BASEURL}/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username,password})
        })
        const status=data.ok;
        data= await data.json();
        if(status){
            return true
        }else{
            toast.error("something went wrong")
        }
    } catch (error) {
        
    }
}