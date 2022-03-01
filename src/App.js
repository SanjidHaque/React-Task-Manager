import './App.css';
import Header from "./components/Header";
import React, {useEffect, useState} from "react";
import Tasks from "./components/Tasks";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([])
    const [showAddTask, setShowAddTask] = useState(false)

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])

    const fetchTasks = async () => {
        const response = await fetch('http://localhost:5000/tasks')
        const data = await response.json()
        return data
    }

    const fetchTask = async (id) => {
        const response = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await response.json()
        return data
    }

    async function addTask(task) {
        const response = await fetch('http://localhost:5000/tasks',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(task)
            })

        const data = await response.json()
        setTasks([...tasks, data])

        // const id = Math.floor(Math.random() * 1000) + 1
        // const newTask = { id, ...task }
        // setTasks([...tasks, newTask])
    }

    async function toggleTask(id) {
        const taskToToggle = await fetchTask(id)
        const updateTask = {  ...taskToToggle, reminder: !taskToToggle.reminder }
        const response = await fetch(`http://localhost:5000/tasks/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updateTask)
            })
        const data = await response.json()

        setTasks(tasks.map(task => task.id === id ? {...task, reminder: !data.reminder} : task))
    }

    async function deleteTask(id)  {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="App">
                            <Header onToggleTaskForm={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} title='Task Manager'/>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col style={{marginTop: '40px'}} lg={{ span: 4, offset: 4 }}>
                        {showAddTask && <AddTask onAddTask={addTask}/>}
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
