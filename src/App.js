import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchusers = async () => {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
          setUsers(users)
        })
    }

    fetchusers();
  }, [])

  return (
    <div>
      <div className="container">
        <h1>Users From JSON Placeholder</h1>
        {users.map(users => (
          <div className="card">
            <p>Name: <span>{users.name}</span></p>
            <p>Email: <span>{users.email}</span></p>
            <p>Username: <span>{users.username}</span></p>
            <p>Phone No:  <span>{users.phone}</span></p>
          </div>
        ))}


      </div>
    </div>
  );
}

export default App;
