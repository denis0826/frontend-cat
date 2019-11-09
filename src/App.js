import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Table from './components/Table';
import Cards from './components/Cards';

import './assets/index.css';

//DEFAULT USERS
const USERS = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
    donations: [{
      name: 'Big Cat',
      donated: 10
    },
    {
      name: 'Small Dog',
      donated: 9
    },
    {
      name: 'Goat',
      donated: 8
    },
    {
      name: 'Elephant',
      donated: 3
    }
  ]
  },
  { id: 2, username: 'user', password: 'user', donations: [] }
]

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [validUser, handleValidUser] = useState(true);
  const [dataTable, handleDataTable] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    const validUser = USERS.filter( o => o.username === username && o.password === password ); 
    if(isValid && validUser.length) {
      setLogin(!isLoggedIn);
      handleDataTable(validUser);
    }else{
      handleValidUser(!validUser);
    }
  }

  return (
    <div className="App clearfix">
      {!isLoggedIn ? (
        <>
          <Header isLoggedIn={isLoggedIn} handleSubmit={handleSubmit}/>
          <main className='main'>
            <h1 className='tcenter'>Lost and Found Pets</h1>
            <Form
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
              validUser={validUser}
            />
            <Cards isLoggedIn={isLoggedIn} />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <Header isLoggedIn={isLoggedIn} handleSubmit={handleSubmit}/>
          <main className='main'>
            <h1 className='tcenter'>Lost and Found Pets</h1>
            <Cards isLoggedIn={isLoggedIn} />
            <Table dataTable={dataTable} />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
