import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faFlag, faMessage, faUserPlus, faBan,
         faUser } from '@fortawesome/free-solid-svg-icons';


export default function ActiveProfile({ type, makeProfileInactive }) {
  return (
    <>
        <div className='topbar'>
            <div>
                <FontAwesomeIcon icon={faCircleUser} className="profile-img fa-fw" />
                <span className='profile-name'>Andy Jones</span>
            </div>

            <span className="close" onClick={makeProfileInactive}>&times;</span>
        </div>
        
        {type === "list" && (
          <>
            <ul role="list">
              <li>Location: Somewhere, TX</li>
              <li>Age: 23</li>
              <li>Profession: Something</li>
              <li>
                Hobbies: Video games, watching basketball &amp; football, watching pro
                wrestling, watching tokusatsu, reading manga, watching anime
              </li>
              <li>Goals: Owning a home, getting at least 100 views on this video</li>
            </ul>
          </>
        )}
        {type === "menu" && (
          <>
            <ul role="menu">
              <li>
                <FontAwesomeIcon icon={faUser} className="menu-icon fa-fw" />
                View Profile
              </li>
              <li>
                <FontAwesomeIcon icon={faUserPlus} className="menu-icon fa-fw" />
                Add Friend
              </li>
              <li>
                <FontAwesomeIcon icon={faBan} className="menu-icon fa-fw" />
                Block
              </li>
              <li>
                <FontAwesomeIcon icon={faFlag} className="menu-icon fa-fw" />
                Report
              </li>
              <li>
                <FontAwesomeIcon icon={faMessage} className="menu-icon fa-fw" />
                Direct Message
              </li>
          </ul>
          </>
        )}
    </>
  )
}
