import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react'
//import About from './components/About'
import Alert from './components/Alert';

/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/

function App() {

  const [mode, setMode] = useState('light');//for setting dark mode

  // const [alert, setAlert] = useState('Enable set')//for setting alert
  const [alert, setAlert] = useState(null); //declaring alert and setAlert

  const showAlert = (message, type) => {   //declaring msg and type
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 1500);

  }

  const toogleMode = () => { //for changing mode a condition is been made
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('dark mode enabled', 'success')


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode enabled', 'success')
    }
  };
  return (
    <>
     {/* <Router>*/}
        <Navbar title="TextUtils" toogleMode={toogleMode} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/*<Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>
  <Route path="/">*/}
              <Textarea showAlert={showAlert} title="Write something" mode={mode} />
           {/* </Route>
          </Switch> */}
        </div>
     {/* </Router> */}



    </>

  );
}


export default App;
