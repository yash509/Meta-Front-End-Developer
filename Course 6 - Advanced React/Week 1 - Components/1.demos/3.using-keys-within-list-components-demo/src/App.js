import './index.css';
import {useState} from "react";

const ToDo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18:00',
  }, {
    id: 'todo2',
    createdAt: '20:30',
  }]);


  const reverseOrder = () => {
    // Reverse is a mutative operation, so we need to create a new array first.
    setTodos([...todos].reverse());
  }

  // First example with keys, show browser console to see the warning.
  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
