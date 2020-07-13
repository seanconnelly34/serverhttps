import React from "react";
import Header from "./components/header/Header";
import Forms from "./forms/index";
import Footer from "./components/footer/Footer";
import "./app.css";

function App() {
  return (
    <div className="body">
      <Header />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
