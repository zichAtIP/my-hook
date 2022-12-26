import React from 'react';
import { useUsers } from './useUsers';

function App() {

  const { users, loading, error } = useUsers();

  if (error) {
    return (<h1>An error occurred</h1>)
  }
  
  return (
    <div className="App">
      {loading ? <p>loading</p> : users.map(user => <p>{user.name} {user.email}</p>)}
    </div>
  );
}

export default App;
