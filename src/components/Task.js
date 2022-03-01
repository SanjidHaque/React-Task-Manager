import React from 'react';
import {CloseButton} from "react-bootstrap"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Task = ({task, onDeleteTask, onToggleTask}) => {
    return (
        <>
            <Row title='Double click to mark as done' onDoubleClick={() => onToggleTask(task.id)} className={`task ${ task.reminder ? 'toggle-task' : '' }`}>
                <Col lg={{ span: 8 }} style={{ textAlign: "left" }}>
                   <h6> {task.text} </h6>
                </Col>
                <Col lg={{ span: 4}} style={{ textAlign: "right" }}>
                    <CloseButton onClick={() => onDeleteTask(task.id)} />
                </Col>
            </Row>
        </>
    );
};


export default Task;
