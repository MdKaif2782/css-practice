import React from 'react';
import './TwitterPost.css'

const TwitterPost = () => {

  let comment_ic = 'https://i.ibb.co/DghP4JC/image-9.png';
  let retweet_ic = 'https://i.ibb.co/d5xhWR6/image-6.png';
  let like_ic = 'https://i.ibb.co/VjCLz3x/image-7.png';
  let share_ic = 'https://i.ibb.co/K6dWCwT/image-8.png';
  let twitter_verified_ic = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png'

  let user_image = 'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/323321150_1645679885883717_4047408205640131554_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGcYN4rrpknL2sB6iONO8iSqbKjaV4Fym-psqNpXgXKb7vZRU49_CQLQzTb4j72InASHnBV0_oeOMrpYwx7-hsl&_nc_ohc=2WjMcGVQBq4AX8mByK1&_nc_ht=scontent.fdac24-2.fna&oh=00_AfAbZ5kzGNrfpaxCZBTjERDHMg9CwoQ3AOEE3c1u0g8mEQ&oe=6456293D'
  let user_name = 'Rijvi Tabassum'
  let user_username = '@rijvinana69'
  let user_time = '1h'
  let user_text = 'Siam ekta voxod... fr'
  let content_image = 'https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/311836589_434469375515825_1063446139210005126_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFW1n9pC3F4YO1DFjRq5LGrYp3rO3c_aDlines7dz9oOcazGfz71xW79Ghk-lOUzy_VTT9KSZh2h4VVUvuRGW4S&_nc_ohc=w_p7wnhMSicAX8R-pO_&_nc_ht=scontent.fdac24-4.fna&oh=00_AfDAyBQCkKSZWYJMX7fx0d3FnQwLfO_i8HAtblvQHCxyrQ&oe=64572877'

  return(
    <div className="twitter-post">
        <img src={user_image} className="profile_image"/>

        <div className="twitter-post-content">
            <div className="twitter-post-header">
                <h3 className="twitter-post-name">{user_name}</h3>
                <img src={twitter_verified_ic} className="twitter-user-verified"/>
                <text className="twitter-post-username">{user_username}</text>
                <text className="twitter-post-time"> · {user_time}</text>
            </div>
            <div className="twitter-post-body">
                <text className="twitter-post-text">{user_text}</text>
                <img src={content_image} className="twitter-post-image"/>
            </div>
            <div className="twitter-post-footer">
                <img src={comment_ic} className="twitter-post-footer-icon"/>
                <img src={retweet_ic} className="twitter-post-footer-icon"/>
                <img src={like_ic} className="twitter-post-footer-icon"/>
                <img src={share_ic} className="twitter-post-footer-icon"/>
            </div>
        </div>
    </div>
  )
}
export default TwitterPost;