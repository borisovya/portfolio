import React from "react";
import './App.css';
import Header from "./Header/Header";
import MainBlock from "./MainBlock/MainBlock";
import Skills from "./Skills/Skills";
import MyWorks from "./MyWorks/MyWorks";
import RemoteWork from "./RemoteWorkBlock/RemoteWork";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <MainBlock />
        <Skills />
        <MyWorks />
        {/*<RemoteWork />*/}
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
