import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TwitterPost from "./components/TwitterPost/TwitterPost";
import DiscordNav from "./components/DiscordNav/DiscordNav";

function App() {

  return (
    <div className="App">
        <DiscordNav/>
      <div className="App-container">
          <TwitterPost/>
      </div>
    </div>
  )
}

export default App
