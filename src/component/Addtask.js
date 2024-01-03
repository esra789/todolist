import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Addtask } from '../Redux/Action';
import {useDispatch} from 'react-redux'
function Example() {
  const [show, setShow] = useState(false);
  const [description,setDescription] = useState("");
  const [isDone,setDone] = useState(false);
 const dispatch=useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const add=()=>{dispatch(Addtask({id:Math.random(), description,isDone}))}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
              onChange={(e)=>setDescription(e.target.value)}
                type="text"
                placeholder="tasck description"
                
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;