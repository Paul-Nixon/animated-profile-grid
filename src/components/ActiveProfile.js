import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faFlag, faMessage, faUserPlus, faBan,
         faUser } from '@fortawesome/free-solid-svg-icons';


export default function ActiveProfile({ makeProfileInactive }) {
  return (
    <>
        <div className='topbar'>
            <div>
                <FontAwesomeIcon icon={faCircleUser} className="profile-img fa-fw" />
                <span className='profile-name'>Andy Jones</span>
            </div>

            <span className="close" onClick={makeProfileInactive}>&times;</span>
        </div>
        
        <ul role="list">
            <li>Location:</li>
            <li>Age:</li>
            <li>Profession:</li>
            <li>Hobbies:</li>
            <li>Goals:</li>
        </ul>

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
  )
}
