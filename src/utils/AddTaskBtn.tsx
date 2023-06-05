import React, { useState } from 'react'
import { IconButton, SelectPicker } from 'rsuite'
import AddOutlineIcon from '@rsuite/icons/Plus'; 
import { InputModal } from '../component/InputModal';
const data = ['pending','in progress','completed'].map(
  item => ({ label: item, value: item })
);

export const AddTaskBtn = () => {
  const [modelStatus,SetmodelStatus]=useState<boolean>(false)

    return (
        <div style={{
            height: 70,
            backgroundColor: '#7eb4ed',
            display: 'flex',
            placeItems: 'center',
            justifyContent:"center",
            alignItems:"center",
            gap:'10px'
        }}>
           <IconButton
          onClick={()=>{
            SetmodelStatus(true)
          }}
        icon={<AddOutlineIcon />}>Add Task</IconButton>

        <InputModal SetmodelStatus={SetmodelStatus}  modelStatus={modelStatus}/>
       
        </div>
    )
}
