import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../features/todoSlice';
import { useParams, useNavigate } from 'react-router-dom';

const UpdatePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const currentTodo = todos.find((todo) => todo.id === Number(id));

  const [updatedText, setUpdatedText] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setUpdatedText(currentTodo.text);
    }
  }, [currentTodo]);

  const handleUpdateTodo = () => {
    dispatch(updateTodo({ id: currentTodo.id, text: updatedText }));
    navigate('/display');   };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Update Todo</h1>
      <input
        type="text"
        value={updatedText}
        onChange={(e) => setUpdatedText(e.target.value)}
        className="border-2 border-gray-300 p-2 mb-4"
        placeholder="Update todo"
      />
      <button
        onClick={handleUpdateTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Update Todo
      </button>
    </div>
  );
};

export default UpdatePage;
