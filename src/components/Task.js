import React from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Task = ({task, onDeleteTask}) => {
    return (
        <>
            <Row style={{padding: '20px 2px', textAlign: 'center'}}>
                <Col lg={{ span: 2, offset: 3 }}>
                    <p>{task.text}</p>
                </Col>
                <Col lg={{ span: 2}}>
                    <p>{task.dateTime}</p>
                </Col>
                <Col lg={{ span: 2}}>
                    <Button onClick={() => onDeleteTask(task.id)} variant="danger" size="sm" > x </Button>
                </Col>
            </Row>
        </>
    );
};

export default Task;
