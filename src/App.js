import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './component/Addtask';
import TaskList from './component/TaskList';

function App() {
  return (
    <div className="App">
      <Example/>
      <TaskList/>
    </div>
  );
}

export default App;
