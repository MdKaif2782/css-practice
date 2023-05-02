import React from 'react';
import './DiscordNav.css'
const DiscordNav = () => {
    let discord_ic = 'https://i.ibb.co/hd8K7cK/image-10.png'
  return(
      <div>
            <div className="discord-nav">
                <text className="discord-nav-text">Dicksword</text>
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