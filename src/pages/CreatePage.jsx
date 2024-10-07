import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (todo) {
      dispatch(addTodo(todo));
      setTodo('');
      navigate('/display'); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Create Todo</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border-2 border-gray-300 p-2 mb-4"
        placeholder="Enter todo"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreatePage;
