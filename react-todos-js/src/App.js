import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Train', rowAssigned: 'David' },
    { rowNumber: 2, rowDescription: 'Clean your room', rowAssigned: 'David' },
    { rowNumber: 3, rowDescription: 'Reed Java Concurrency in Practice', rowAssigned: 'David' },
    { rowNumber: 4, rowDescription: 'Utilize Redis in this todo list', rowAssigned: 'David' }
  ]
  )

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    }
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTask = (deleteTaskRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTaskRowNumber;
    })
    setTodos(filtered);
  }


  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTask={deleteTask} />
          <button onClick={() => setShowAddTaskForm(!showAddTaskForm)} className='btn btn-primary'>
            {showAddTaskForm ? 'Close New Task' : 'New Task'}
          </button>
          {showAddTaskForm &&
            <NewTodoForm addTodo={addTodo} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
