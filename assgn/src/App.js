// App.js
import React from 'react';
import Authentication from './components/Authentication'
import Login from './components/Login';
import Register from './components/Registration';
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
