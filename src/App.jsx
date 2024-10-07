import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import CreatePage from './pages/CreatePage';
import DisplayPage from './pages/DisplayPage';
import UpdatePage from './pages/UpdatePage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<DisplayPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/display" element={<DisplayPage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
