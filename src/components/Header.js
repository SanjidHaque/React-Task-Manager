import React from 'react';
import Button from "./Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = ({title, onToggleTaskForm}) => {
    return (
        <>
            <Row style={{paddingTop:'20px'}}>
                <Col lg={{ span: 4, offset: 4 }}>
                    <div style={headerStyle}> {title} </div>
                </Col>
            </Row>
            <Row>
                <Col lg={{ span: 4, offset: 4}} style={{paddingTop:'10px'}}>
                    <Button backgroundColor='#5984b6' text='Add' onClick={onToggleTaskForm}/>
                </Col>
            </Row>
        </>
    );
};

const headerStyle = {
    fontSize:'36px',
    fontWeight: '500'
}

export default Header;
