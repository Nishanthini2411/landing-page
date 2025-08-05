import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import "./App.css";
import BiodataLandingPage from "./landingpage";
import Landingpage from "./landingpage";
import Inputform from "./inputform";
import Login from "./Loginpage";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      {/* <App />   */}
      
    
     <Landingpage/>  

      {/* Uncomment the line below to use BiodataLandingPage instead */}
      {/* <BiodataLandingPage /> */}
      
      {/* 
      <Inputform/> */}
      
      {/* 
      <Login/>  */}



   
    
     {/* <BiodataLandingPage/>  */}
  </React.StrictMode>
);
