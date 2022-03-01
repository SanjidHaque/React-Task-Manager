import React from 'react';
import Button from "./Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useLocation} from 'react-router-dom'

const Header = ({title, onToggleTaskForm, showAddTask}) => {
    const location = useLocation()
    return (
        <>
            <Row style={{paddingTop:'20px'}}>
                <Col lg={{ span: 4, offset: 4 }}>
                    <div style={headerStyle}> {title} </div>
                </Col>
            </Row>
            {location.pathname ==='/' &&
                <Row>
                    <Col lg={{ span: 4, offset: 4}} style={{paddingTop:'10px'}}>
                        <Button backgroundColor='#5984b6' text={showAddTask ? 'Close' : 'Add'} onClick={onToggleTaskForm}/>
                    </Col>
                </Row>
            }

        </>
    );
};

const headerStyle = {
    fontSize:'36px',
    fontWeight: '500'
}

export default Header;
