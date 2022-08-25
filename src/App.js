// import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import Alert from "./component/Alert.js";
import About from "./component/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // setTimeout(()=>{
  //   document.title="download archs now";
  //  },2000)
  //  setTimeout(()=>{
  //   document.title="please bhen";
  //  },1000)


  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
  };

  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      // style={background-Color:}
      setMode("dark");
      document.body.style.backgroundColor = "#0e0f22";
      showAlert("success", "now it is dark themed");
      document.title='archs-dark themed';
  
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "now it is light themed");
      // document.title='archs-light themed';
    }
  };



  return (
    <>
      <Navbar
        title="Archiess"
        aboutArchs="About-Archs"
        mode={mode}
        togglebu={toggle}
      />
      <Alert alert={alert} mode={mode} />
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact path="/"
            element={
              <Textform
                heading="Enter the text you want to enter below: "
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

// const[alert,setalert]=useState(null);

// const showAlert=(message,type)=>{
//   setalert({
//        msg:message,
//        type:type
//   })
//   setTimeout(
//     ()=>{
//      setalert(null)
//     }
//   ,3000)};
// showAlert('success','dark mode is enabled ')
// showAlert('success','light mode is enabled ')



