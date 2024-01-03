import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux'
import { edittask } from '../Redux/Action';
function TASK({task}) {
  const dispatch=useDispatch()
  console.log(task)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
         {task.description} <br />
         Done: <input type="checkbox"  checked={task.isDone}/> 
        </Card.Text>
        <Button variant="primary" onClick={()=>dispatch(edittask(task.id,{id:task.id,description:task.description,isDone:!task.isDone}))}>Is Complete</Button>
      </Card.Body>
    </Card>
  );
}

export default TASK;