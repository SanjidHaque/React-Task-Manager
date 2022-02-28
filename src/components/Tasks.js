import Task from "./Task";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Tasks = ({tasks, onDeleteTask}) => {
    return (
        <>
            <Row>
                <Col>
                    { tasks.map(task => ( <Task key={task.id} task={task} onDeleteTask={onDeleteTask} /> ))}
                </Col>
            </Row>
        </>
    );
};

export default Tasks;
