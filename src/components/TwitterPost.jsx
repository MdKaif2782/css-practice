import React from 'react';
import './TwitterPost.css'

const TwitterPost = () => {

  let comment_ic = 'https://i.ibb.co/DghP4JC/image-9.png';
  let retweet_ic = 'https://i.ibb.co/d5xhWR6/image-6.png';
  let like_ic = 'https://i.ibb.co/VjCLz3x/image-7.png';
  let share_ic = 'https://i.ibb.co/K6dWCwT/image-8.png';

  return(
    <div className="twitter-post">
        <img src='https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/323321150_1645679885883717_4047408205640131554_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGcYN4rrpknL2sB6iONO8iSqbKjaV4Fym-psqNpXgXKb7vZRU49_CQLQzTb4j72InASHnBV0_oeOMrpYwx7-hsl&_nc_ohc=2WjMcGVQBq4AX8mByK1&_nc_ht=scontent.fdac24-2.fna&oh=00_AfAbZ5kzGNrfpaxCZBTjERDHMg9CwoQ3AOEE3c1u0g8mEQ&oe=6456293D' className="profile_image"/>

        <div className="twitter-post-content">
            <div className="twitter-post-header">
                <h3 className="twitter-post-name">Rakin Shahriar</h3>
                <text className="twitter-post-username">@rakin69</text>
                <text className="twitter-post-time"> · 1h</text>
            </div>
            <div className="twitter-post-body">
                <text className="twitter-post-text">Kabbo ekta voxod</text>
                <img src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/330049211_597374938590976_8380103954641850259_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEN2tV6zZ_CcCYcGpRYBa4f04JxTkeAkTfTgnFOR4CRN--NCKswijZNeI1oLZd3TbMIttujhiV1_dXN9cOsNvWS&_nc_ohc=wMJ3PdcteGgAX9kP2hY&_nc_ht=scontent.fdac24-2.fna&oh=00_AfBUxgH_4jOmzLdxvyMTfayUkc9UhuZFbEuVwhe_qd845w&oe=64563391" className="twitter-post-image"/>
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