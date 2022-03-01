import Task from "./Task";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Tasks = ({tasks, onDeleteTask, onToggleTask}) => {
    return (
        <>
            <Row style={{ paddingTop: "20px"}}>
                <Col lg={{ span: 4, offset: 4 }}>
                    { tasks.map((task, index) => ( <Task key={index} task={task} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} /> ))}
                </Col>
            </Row>
        </>
    );
};

export default Tasks;
