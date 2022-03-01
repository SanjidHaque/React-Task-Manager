import React from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Task = ({task, onDeleteTask, onToggleTask}) => {
    return (
        <>
            <Row onDoubleClick={() => onToggleTask(task.id)} className={`task ${ task.reminder ? 'toggle-task' : '' }`}>
                <Col lg={{ span: 4 }} style={{ textAlign: "left" }}>
                    {task.text}
                </Col>
                <Col lg={{ span: 4, offset: 4 }} style={{ textAlign: "right" }}>
                    <Button onClick={() => onDeleteTask(task.id)} variant="danger" size='sm' > Remove </Button>
                </Col>
            </Row>
        </>
    );
};

const task = {
    padding: '20px 2px',
    margin: '20px 2px',
    textAlign: 'center',
    border: '1px solid grey',
    borderRadius: '5px'
}

export default Task;
