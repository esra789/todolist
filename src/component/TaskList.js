import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import TASK from './Task'
import {Button} from 'react-bootstrap'
function TaskList() {
    const tasks = useSelector(state=>state)
    console.log(tasks)
    const [isComplete,setIscomplete]=useState(false)
    console.log(isComplete)
  return (
    <div>
    <Button onClick={()=>setIscomplete(true)}>
      Done
    </Button>
    <Button onClick={()=>setIscomplete(false)}>
      Not Done
    </Button>
        {tasks.filter(e=>e.isDone==isComplete).map(e=><TASK task={e}/>)}
    </div>
  )
}

export default TaskList