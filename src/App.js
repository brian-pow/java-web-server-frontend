import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    axios('http://35.192.53.110/').then((result)=> setData(result.data));
  },[])

  return (
    <div className="App">
      This is some text
      <h1>And  this  is my data: {data}</h1>
    </div>
  );
}

export default App;
