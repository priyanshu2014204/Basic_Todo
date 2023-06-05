import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Popover, Whisper } from "rsuite";


const DeleteBtn = ({ handleDelete}: { handleDelete:()=>void}) => (
    <Whisper
        placement="top"
        trigger="click"
        speaker={<Popover
            style={{
                textAlign: "right"
            }}
            arrow={false}>
            <p style={{
                fontSize: "18px",
                padding: "5px"
            }}> Do you want to delete this task</p>

            {/* <Button style={{
                backgroundColor: "#F8F8F8",
                padding: "5",
                textAlign: "left"
            }}>
                Cancel
            </Button> */}
            <Button
             onClick={handleDelete}
            style={{
                backgroundColor: "red",
                padding: "5",
                textAlign: "left",
                color: "white",
                marginLeft: "10px"
            }}>
                Yes
            </Button>
        </Popover>}
    >
        <Button ><FontAwesomeIcon icon={faTrash} /></Button>
    </Whisper>
);

export default DeleteBtn