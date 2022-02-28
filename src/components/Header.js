import React from 'react';
import Button from "./Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Header = ({title}) => {
    const onClick = () => {
        console.log('Button clicked');
    }
    return (
        <>
            <Row style={{paddingTop:'20px'}}>
                <Col>
                    <div style={headerStyle}> {title} </div>
                </Col>
                <Col style={{paddingTop:'10px'}}>
                    <Button backgroundColor='#5984b6' text='Add' onClick={onClick}/>
                </Col>
            </Row>
        </>
    );
};

const headerStyle = {
    fontSize:'36px'
}

export default Header;
