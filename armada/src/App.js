import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Land from './components/Land';
import Loading from './components/Loadin';


function App() {
            const [isLoading, setIsLoading] = useState(true);
            useEffect (() =>{
              setTimeout(() =>{
                setIsLoading(false);
              }, 1000)
              
            })
  return (
    <>
    <div>
      {isLoading==true?<Loading/>:<Land/>}
    </div>
    </>
  );
}

export default App;
