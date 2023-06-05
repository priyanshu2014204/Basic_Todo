import React from 'react'
import CustomNavBar from '../component/Navbar'
import { AddTaskBtn } from '../utils/AddTaskBtn'
import MyCard from "../component/TaskCard"
import ShowCard from '../component/ShowCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteBtn from '../utils/DeleteBtn'
import Page from '../component/Pagination'


export const Home = () => {
  return (
    <div>
        <CustomNavBar/>
        <AddTaskBtn/>
        <ShowCard/>
     <ToastContainer/>
     {/* <Page/> */}
    </div>
  )
}
