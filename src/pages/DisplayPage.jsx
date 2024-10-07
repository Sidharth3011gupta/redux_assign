import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todoSlice';
import { Link } from 'react-router-dom';

const DisplayPage = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Todo List</h1>
      <ul className="list-none">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <span className="mr-4">{todo.text}</span>
            <Link to={`/update/${todo.id}`}>
              <button className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded">Update</button>
            </Link>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Link to="/create" className="mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Create New Todo</button>
      </Link>
    </div>
  );
};

export default DisplayPage;
