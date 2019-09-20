import React, { Component } from "react";
import Logo from "../public/logo.svg";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <h1 className="main-heading">Here you come!</h1>
        <h2 className="secondary-heading">
          Your MERN application is successfully generated.
        </h2>
        <Logo />
      </header>
      <p className="paragraph">HELLO WORLD</p>
    </div>
  );
};

export default App;
