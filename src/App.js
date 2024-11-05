import React from 'react';
import './App.css';
import AccountCreationForm from './AccountCreationForm'; // Import the new component

function App() {
  return (
    <div className="App">
      <h1> create your Account </h1>
      {/* Render the AccountCreationForm Component */}
      <AccountCreationForm />
    </div>
  );
}

export default App;
