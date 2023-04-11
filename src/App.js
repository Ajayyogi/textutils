import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  

  const toggleMode =()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.background = "#04183c";
      showAlert("Dark mode has been enabled","success");
      document.title= "Textutils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled","success");
      document.title= "Textutils - Light Mode";
    }
  } 

  return (
    <>
    {/* <Router> */}
 <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert} />
 <div className="container my-3">
  {/* <Routes> */}
    {/* <Route exact path="/about" element={<About/>} ></Route> */}
    {/* <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analysze below" mode={mode} />} ></Route> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analysze below" mode={mode} />

 {/* <About/> */}
 {/* </Routes> */}
 </div>
 {/* </Router> */}
    </>
  );
}

export default App;
