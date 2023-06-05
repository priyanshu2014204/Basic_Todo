import React, { useEffect, useState } from 'react';
import MyCard from './TaskCard';
import { getAllData } from '../api/Task.api';
import { myprofile } from '../api/User.api';
import { useNavigate } from 'react-router-dom';
import Page from './Pagination';
import { SelectPicker } from 'rsuite';
const data = ['pending','in progress','completed'].map(
  item => ({ label: item, value: item })
);
// interface Todo {
//     title: string;
//     description: string;
//     status: string;
//     _id:string,
//     author:string
//   }


function ShowCard(){
  const navigate=useNavigate()
  const [gridItems,SetGridItem] = useState([
    {
        title: "Task 1",
        description: "",
        status: "pending"
      },
      {
        title: "Task 2",
        description: "",
        status: "completed"
      },
      {
        title: "Task 3",
        description: "",
        status: "progress"
      },
      {
        title: "Task 4",
        description: "",
        status: "pending"
      },
      { 
        title: "Task 5",
        description: "",
        status: "completed"
      }
  ])
const getData =async (pagenumber?:any,status?:any)=>{
    try {
        await getAllData(SetGridItem,pagenumber,6,status);
    } catch (error) {
        throw error
    }
}
  useEffect(()=>{
   async  function fetchfun(){
       const response=await   myprofile()
       if(response){
             
       }else{
        navigate("/signup")
       }
    }
    fetchfun()
    
    
    getData(1)
    // SetGridItem(getAllData)
    // getAllData()
  },[])

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '4rem',
    placeItems:"center",
    padding:"25px",
    width:"75%",
    marginTop:"50px",
    margin:"auto",
    // backgroundColor:"#F5F5F5"
  };

  const gridItemStyle: React.CSSProperties = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center',
  };


  return (
    <>
     <SelectPicker onChange={(a)=>{
      if(a===null)getData(1,undefined)
      else{
          getData(1,a)
      }
        }} data={data} style={{ width: 224 }} />
     <div style={gridContainerStyle}>
      {gridItems.map((item, index) => (
        // <div key={index} style={gridItemStyle}>
        //   {item}
        // </div>
        <MyCard  key={index} getData={getData} idx={index+1} {...item}></MyCard>
      ))}
    </div>
    <Page getData={getData}/>
    </>
  );
}

export default ShowCard;
