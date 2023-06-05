import { BASEURL } from "./api";
import {  toast } from 'react-toastify';
// const temp_token= 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2I4OWJhNGE2OWU1YTI0ZGJkNDZlNSIsImlhdCI6MTY4NTk0MjM0OX0.MERBBKwCXAIimGlifC7TfwfOmSb_qWZytIJ286Y0zzM'
export async function createTask(formValue:any){
    try {
        const tokenString = localStorage.getItem("task_manager_token");
        const token = tokenString ? JSON.parse(tokenString) : null;
        let data = await fetch(`${BASEURL}/task/createtask`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "authorization":`bearer ${token?.token || 'a'}`
              },
              body:JSON.stringify({
                title:formValue.title,
                description:formValue.description,
                status:formValue.select
              })
        })
        if(data.ok){
        data= await data.json();
        toast.success("Task created successfully 🙂")
    }
        else{
            data=await data.json()
           toast.error("Something went wrong!")
        }
    } catch (error) {
        return error
    }
}



export async function getAllData(Setfun:any,page:Number=1,limit=6,status?:any){
    try {
        const tokenString = localStorage.getItem("task_manager_token");
        const token = tokenString ? JSON.parse(tokenString) : null;
        console.log(status,'status')
        let data = await fetch(`${BASEURL}/task/alltask?page=${page}&limit=${limit}&status=${status}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                "authorization":`Bearer ${token?.token || 'a'}`
              },
        })
        if(data.ok){
        data=await data.json()     
        Setfun(data)}
        console.log(await data.json())
        return data
    } catch (error) {
        return error
    }
}


export async function deleteTask(id:string) {
    try {
        const tokenString = localStorage.getItem("task_manager_token");
        const token = tokenString ? JSON.parse(tokenString) : null;
        let data = await fetch(`${BASEURL}/task/deletetask/${id}`,{
            method:"DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization":`Bearer ${token?.token || 'a'}`
              },
        })
        data=await data.json()
        console.log(data)
    } catch (error) {
       return error  
    }
}


export async function updateTask(id:string,title:string,description:string,status:string) {
    try {
        const tokenString = localStorage.getItem("task_manager_token");
        const token = tokenString ? JSON.parse(tokenString) : null;
        let data = await fetch(`${BASEURL}/task/updatetask/${id}`,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                "authorization":`Bearer ${token.token}`
              },
            body:JSON.stringify({
                title,status,description
            })  
        })
        if(data.ok){
            toast.success("Task created successfully 🙂")
        }else{
            toast.error("something went wrong")
        }
    } catch (error) {
        return error
    }
}


export async function markCompelete (id:string){
    try {
        const tokenString = localStorage.getItem("task_manager_token");
        const token = tokenString ? JSON.parse(tokenString) : null;
        let data = await fetch(`${BASEURL}/task/updatetask/${id}`,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                "authorization":`Bearer ${token.token}`
              },
            body:JSON.stringify({
                status:'completed'
            })  
        })
        if(data.ok){
            toast.success("Task Marked as successfull 🙂")
        }else{
            toast.error("something went wrong")
        }
    } catch (error) {
        return error
    }
}

export async function countTask (Setfunc:any){
    try {
        const tokenString = localStorage.getItem("task_manager_token");
        const token = tokenString ? JSON.parse(tokenString) : null;
        let data = await fetch(`${BASEURL}/task/totaltask`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                "authorization":`Bearer ${token.token}`
              }  
        })
        if (data.ok) {
            const temp_data: { msg: string } = await data.json();
           Setfunc(temp_data.msg);
            console.log(data, token);
          } else {
            throw new Error("Failed to fetch total tasks"); // Throw an error to be caught in the catch block
          }
        console.log(data,token)
    } catch (error) {
        return error
    }
}