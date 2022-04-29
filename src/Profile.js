import React, { useRef } from 'react'

import useToggle from './custom_hooks/useToggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


export default function Profile() {
  const [isActive, toggleValue] = useToggle(false),
  profileRef = useRef();

  
  return (
    <div className='profile' ref={profileRef} onClick={() => {
      if (!isActive)
      {
        toggleValue(!isActive);
        profileRef.current.classList.add("active");
      }
    }}>
        {isActive ? (
          <>
            <FontAwesomeIcon icon={faCircleUser} className="profile-img fa-fw" />
            <span className='profile-name'>Andy Jones</span>
          </>
        ) : (
          <div className='topbar'>
            <div>
              <FontAwesomeIcon icon={faCircleUser} className="profile-img fa-fw" />
              <span className='profile-name'>Andy Jones</span>
            </div>

            <span>&times;</span>
          </div>
        )}
    </div>
  )
}
