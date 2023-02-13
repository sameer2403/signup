import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = () => {
    setCurrentForm(currentForm === 'login' ? 'register' : 'login');
  };

  return (
    <div className='App'>
      {currentForm === 'login' ? (
        <Login toggle={toggleForm} />
      ) : (
          <Register toggle={toggleForm} />
      )}
      
      
    </div>
  );
}

export default App;
