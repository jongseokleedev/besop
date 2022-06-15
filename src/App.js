import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Main from './Pages/Main'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Nav/>
          <Main/>
          {/* <Footer/> */}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
