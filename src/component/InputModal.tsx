import React from 'react'
import { Button, Form, Input, Modal, Schema, SelectPicker, Uploader } from 'rsuite'
import { createTask } from '../api/Task.api';
const { StringType } = Schema.Types;
const model = Schema.Model({
  title: StringType().isRequired('This field is required.'),
  description: StringType()
    .isRequired('This field is required.'),
  select:StringType()
  .isRequired('This field is required.'),
});
const Textarea = React.forwardRef((props, ref:any) => <Input {...props} as="textarea" ref={ref} />);
const selectData = ['pending', 'in progress'].map(item => ({
  label: item,
  value: item
}));

interface InputModalProps {
  modelStatus: boolean;
  SetmodelStatus: any;
}

export const InputModal: React.FC<InputModalProps> = ({modelStatus,SetmodelStatus}) => {
  const [formValue, setFormValue] = React.useState<any>({
    title: '',
    description: '',
    select: '',
  });

   const handleFormSubmit = async () => {
    
    if(formValue.title.length>0&&formValue.description.length>0&&formValue.select!==null&&formValue.select.length>0){
      // console.log(formValue)
     await createTask(formValue)
    }
  }

  return (
     <Modal open={modelStatus} onClose={()=>{SetmodelStatus(false)}} size="xs">
        <Modal.Header>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onChange={setFormValue} formValue={formValue} model={model} onSubmit={handleFormSubmit}>
            <Form.Group controlId="title-9">
              <Form.ControlLabel>Title</Form.ControlLabel>
              <Form.Control name="title" accept='true' />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="textarea-9">
              <Form.ControlLabel>Textarea</Form.ControlLabel>
              <Form.Control  name="description" accepter={Textarea}  >
              {/* {({ value, ...rest }) => (
                  <Textarea rows={5} value={value} {...rest} />
                )} */}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Status</Form.ControlLabel>
              <Form.Control name="select" data={selectData}  accepter={SelectPicker} />
            </Form.Group>
            <Uploader action='accept'>
              <Button>
                Upload file
              </Button>
            </Uploader>
            <Button type='submit' appearance="primary">
              Confirm
            </Button>
          </Form>

        </Modal.Body>
        <Modal.Footer>

          {/* <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button> */}
        </Modal.Footer>
      </Modal>
  )
}
