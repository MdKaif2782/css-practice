import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TwitterPost from "./components/TwitterPost/TwitterPost";
import DiscordNav from "./components/DiscordNav/DiscordNav";

function App() {

  return (
    <div className="App">
      <DiscordNav/>
      <TwitterPost/>
    </div>
  )
}

export default App
