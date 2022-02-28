import './App.css';
import Header from "./components/Header";
import React, {useState} from "react";
import Tasks from "./components/Tasks";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Email Johan",
            dateTime: "12/12/21",
            reminder: true
        },
        {
            id: 2,
            text: "Email Johan",
            dateTime: "12/12/21",
            reminder: false
        },
        {
            id: 3,
            text: "Email Johan",
            dateTime: "12/12/21",
            reminder: true
        },
        {
            id: 4,
            text: "Email Johan",
            dateTime: "12/12/21",
            reminder: false
        },
        {
            id: 5,
            text: "Email Johan",
            dateTime: "12/12/21",
            reminder: true
        }
    ])

    function deleteTask(id)  {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="App">
                            <Header title='Task Manager'/>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        { tasks.length > 0 ? (<Tasks tasks={tasks} onDeleteTask={deleteTask}/>) : 'No task to show!'}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
