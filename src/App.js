import './App.css';
import Header from "./components/Header";
import React, {useState} from "react";
import Tasks from "./components/Tasks";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Fill gas from Clean Fuel",
            dateTime: "12/12/21",
            reminder: true
        },
        {
            id: 2,
            text: "Email HR to post a vacancy",
            dateTime: "12/12/21",
            reminder: false
        },
        {
            id: 3,
            text: "Feed the mocking birds",
            dateTime: "12/12/21",
            reminder: true
        }
    ])

    const [showAddTask, setShowAddTask] = useState(false)

    function addTask(task) {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    function toggleTask(id) {
        setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    function deleteTask(id)  {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="App">
                            <Header onToggleTaskForm={() => setShowAddTask(!showAddTask)} title='Task Manager'/>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col style={{marginTop: '40px'}} lg={{ span: 4, offset: 4 }}>
                        {showAddTask && <AddTask onAddTask={addTask} />}
                        {/*Shortcut way of doing ternary operation without adding else*/}
                    </Col>
                </Row>

                <Row>
                    <Col>
                        { tasks.length > 0 ? (<Tasks tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask}/>) : <Header/>}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
