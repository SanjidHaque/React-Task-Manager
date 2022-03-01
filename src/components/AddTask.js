import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        if (!text) {
            alert('Task cannot be empty')
            return
        }
        onAddTask({text})
        setText('')
    }

    return (
        <Form onSubmit={onSubmit}>

            <Form.Group>
                <Form.Label style={{fontSize: '18px'}}>Task</Form.Label>
                <Form.Control type="text" placeholder="Add task" value={text} onChange={(e) => {setText(e.target.value)}} />
            </Form.Group>


            <Button style={{marginTop: '10px'}} variant="dark" size='sm' type="submit">
                Save
            </Button>


        </Form>
    );
};

export default AddTask;
