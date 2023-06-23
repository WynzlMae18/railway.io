import React, {useEffect, useState} from 'react';
import './App.css';
import { Login } from './Login';
import { Book } from './Book';
import { Personal } from './Personal';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
    handleNextPage()
  };
  const handleNextPage = () => {
    if (currentForm === 'Login') {
      setCurrentForm('Book');
    } else if (currentForm === 'Book') {
      setCurrentForm('Personal');
    }
    // Add more conditions if there are additional forms to navigate
  }
  return (
    <div className='App'>

        {currentForm === 'Login' ? (
            <Login onFormSwitch={toggleForm} />
          ) : currentForm === 'Book' ? (
            <Book onFormSwitch={toggleForm} />
          ) : currentForm === 'Personal' ? (
            <Personal onFormSwitch={toggleForm} />
          ) : null}

    </div>

  );
}

export default App;

