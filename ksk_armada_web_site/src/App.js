import './App.css';
import './Components/Home/home(style).css';
import './Components/Services/service(style).css';
import './Components/Contacts/Contact(style).css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import Header from './Components/Header';
import react from 'react';




function App() {
  return (
    <>
        <div className="wrapper">
              <Header/>
        </div>
    </>
  );
}

export default App;
