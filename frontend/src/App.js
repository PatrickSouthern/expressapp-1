import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [basicInfo, setBasicInfo] = useState("");
  const [users, setUsers] = useState([]);

  function getInfo(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setBasicInfo(json.message);
      });
  }


  function getUsers(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/users/`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setUsers(json);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Cam!
        </a>
        <div>
          <button onClick={getInfo}>
            Get basic info
        </button>
          <br /><br />
          <div>
            {basicInfo}
          </div>
        </div>
        <br />
        <div>
          <button onClick={getUsers}>
            Get users
        </button>
          <br /><br />
          <div>
            {users.map(user => (
              <div key={user.name}>{user.name}{` `}({user.age})
                {user.cars.map(car => (
                  <li key={car.name}>{car.name}
                  </li>
                ))}
                <br />
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

