import React from 'react';
import './DiscordNav.css'
const DiscordNav = () => {
    let discord_ic = 'https://avatars.githubusercontent.com/u/46283609?s=280&v=4'
  return(
      <div>
            <div className="discord-nav">
                <img src={discord_ic} className="discord-nav-ic" alt="discord icon"/>
                <text className="discord-nav-ic">B</text>
                <text className="discord-nav-ic">C</text>
                <text className="discord-nav-ic">D</text>
                <text className="discord-nav-ic">E</text>
            </div>
      </div>
  )
}
export default DiscordNav;