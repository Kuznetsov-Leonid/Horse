import './App.css';
import './Components/Home/home(style).css';
import './Components/Services/service(style).css';
import './Components/Contacts/Contact(style).css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Foouter from './Components/Foouter';

function App() {
  return (
    <>
      <div className="wrapper">
            <Header/>
            <Foouter/>
      </div>
    </>
  );
}

export default App;
