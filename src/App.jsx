import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TwitterPost from "./components/TwitterPost/TwitterPost";
import DiscordNav from "./components/DiscordNav/DiscordNav";

function App() {

  return (
      <div className="App">
          <DiscordNav class="App-nav"/>
          <div className="App-container">
              <div className="App-content">
                  <div className="scrollable-content">
                      <TwitterPost/>
                  </div>
              </div>
          </div>
      </div>

  )
}

export default App
