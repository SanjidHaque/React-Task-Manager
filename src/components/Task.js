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


export default Task;
