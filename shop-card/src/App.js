import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import Sidebar from './Components/sidebar'
import Body from './Components/Body'





function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
        <Sidebar/>
        </div>
        <div className="col-10">
        <Body/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
