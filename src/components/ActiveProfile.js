import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


export default function ActiveProfile({ changeProfileState }) {
  return (
    <>
        <div className='topbar'>
            <div>
                <FontAwesomeIcon icon={faCircleUser} className="profile-img fa-fw" />
                <span className='profile-name'>Andy Jones</span>
            </div>

            <span className="close" onClick={changeProfileState}>&times;</span>
        </div>
        
        <ul role="list">
            <li>Location:</li>
            <li>Age:</li>
            <li>Profession:</li>
            <li>Hobbies:</li>
            <li>Goals:</li>
        </ul>
    </>
  )
}
