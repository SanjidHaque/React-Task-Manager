import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EmptyTask = () => {
    return (
        <Row style={{paddingTop:'20px', textAlign: "center"}}>
            <Col lg={{ span: 4, offset: 4 }}>
                <h6>No task to show, it's easy to create one</h6>
            </Col>
        </Row>
    );
};

export default EmptyTask;
