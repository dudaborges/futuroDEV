import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import AddUser from './components/Users/AddUser'

function App() {

  const [people, setPeople] = useState([])

  useEffect(() => {
    document.addEventListener('localStorageUpdated', handlePeople, false)
  })

  const handlePeople = () => {
    setPeople(JSON.parse(localStorage.getItem('people')))
  }
  return (
    <>
    <Login />
    {people && }
    <AddUser />
    
    </>
    
  );
}

export default App;
