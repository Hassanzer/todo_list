import React, { useState, useEffect } from 'react';
import Delete from '../components/delete';
import Input from '../components/input';
import { GrUpdate } from 'react-icons/gr'

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodoList(data.slice(0, 3).map(todo => ({ id: todo.id, todoName: todo.title })));
      })
      .catch(error => console.error(error));
  }, []);

  const handleForm = (todo) => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({ title: todo }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setTodoList(prevTodoList => [...todoList, { id: data.id, todoName: data.title }]);
      })
      .catch(error => console.error(error));
  };

  const deleteTodo = (deleteId) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${deleteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        const updatedTodoList = todoList.filter((val) => val.id !== deleteId);
        setTodoList(updatedTodoList);
      })
      .catch(error => console.error(error));
  };
  //update funtion
  const updateTodo = (updateId, updatedTodoName) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${updateId}`, {
      method: 'PUT',
      body: JSON.stringify({ title: updatedTodoName }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        const updatedTodoList = todoList.map(todo => {
          if (todo.id === updateId) {
            return { id: todo.id, todoName: data.title };
          }
          return todo;
        });
        setTodoList(updatedTodoList);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='bg-gradient-to-r from-[#9c0be4] to-[#0caac6] w-full h-screen flex items-center'>
      <div className='w-[600px] mx-auto bg-white p-5 text-center rounded-md'>
        <h1 className='text-5xl font-Bold mb-8'>Todo List</h1>
        <Input handleForm={handleForm} />
        <div className='mb-8'>

        <div className="todo-show-area">
          <ul>
            {todoList.map((singleTodo) => {
              return (
                <li
                  key={singleTodo.id}
                  className='bg-gradient-to-r from-pink-500 to-purple-500 mb-4 px-5 text-white py-5 rounded-lg text-3xl flex justify-between items-center space-y-2'
                >
                  <span>{singleTodo.todoName}</span>
                  <div className='flex justify-between items-center'>
                    <button
                      className='bg-green-500 px-3 py-2 rounded-lg mr-2 '
                      onClick={() => {
                        const updatedTodoName = prompt('Enter updated todo name:');
                        if (updatedTodoName) {
                          updateTodo(singleTodo.id, updatedTodoName);
                        }
                      }}
                    >
                      <GrUpdate size={18}/>
                    </button>
                    <Delete
                      
                      deleteValue={singleTodo.id}
                      onDelete={deleteTodo}
                    />
                    <div className='ml-2'></div>
                  </div>
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
