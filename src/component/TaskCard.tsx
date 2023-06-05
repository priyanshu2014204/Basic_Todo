import React, { useState } from 'react';
import { PanelGroup, Panel, Button, Placeholder } from 'rsuite';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteBtn from '../utils/DeleteBtn';
import {  countTask, deleteTask, markCompelete } from '../api/Task.api';
import { EditModal } from './EditModal';
import { toast } from 'react-toastify';
// const generateRandomColor = (id:any) => {
//     const hue = (id * 70) % 360; // Generate hue value based on id
//     const saturation = 70 + Math.random() * 30; // Random saturation between 70% and 100%
//     const lightness = 50 + Math.random() * 10; // Random lightness between 50% and 60%
//     return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
//   };

const MyCard = ({ getData,idx, title, description, status ,_id}: any) => {
 const [modelStatus,SetmodelStatus]=useState(false)

 async function handleComplete(id:string,status:string){
  // countTask()
  if(status=='completed'){
    toast.error("Already completed")
  }else
    await markCompelete(id)
    getData()
 }

    const gridItemStyle: React.CSSProperties = {
        backgroundColor: '#f2f2f2',
        padding: '10px',
        textAlign: 'left',
    };
  const handleDelete = async (_id:string)=> {
  await deleteTask(_id)
    getData()
  }
    return (
        <div style={{
            width: "350px",
            borderTop: '4px solid red',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: "10px",
            borderColor: status == 'completed' ? "lightgreen" : status == 'pending' ? "orange" : "red",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        }}>
          { description==''? <div style={{
                padding:20
            }}>
              <Placeholder.Paragraph rows={5} />
            </div>:
            <PanelGroup style={gridItemStyle}>
           
                <Panel header={title} bordered>
                    <p style={{
                    }}>{description}</p>
                    <p>Status : {status}</p>
                    <div style={{
                        marginTop:"10px",
                        display:"flex",
                        flexDirection:"row",
                        gap:"20"
                    }}>
                          <Button onClick={()=>{SetmodelStatus(true)}}>
                            <FontAwesomeIcon color='red' icon={faEdit} />
                        </Button>
                      <EditModal modelStatus={modelStatus} SetmodelStatus={SetmodelStatus} 
                        _id={_id}
                        status={status}
                        description={description}
                        title={title}
                        getdata={getData}
                      />
                      <Button 
                         onClick={()=>{
                          handleComplete(_id,status)
                         }}
                      >
                      <FontAwesomeIcon color='green' icon={faCheck} />
                      </Button>
                         <DeleteBtn  handleDelete={()=>handleDelete(_id)}/>
                    </div>
                </Panel>
            </PanelGroup>}
        </div>
    );
};

export default MyCard;
