import React, { useRef } from 'react';

import useToggle from '../custom_hooks/useToggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import ActiveProfile from './ActiveProfile';


export default function Profile({ animateGrid }) {
  const [isActive, toggleValue] = useToggle(false),
  profileRef = useRef();


  function makeProfileActive()
  {
    if (isActive) return;

    profileRef.current.classList.add("active");
    animateGrid(true);
    toggleValue(!isActive);
  }

  function makeProfileInactive()
  {
    profileRef.current.classList.remove("active");
    animateGrid(false);
    toggleValue(!isActive);
  }
  
  return (
    <div className='profile' ref={profileRef} onClick={makeProfileActive}>
        {isActive ? <ActiveProfile type={"list"} makeProfileInactive={makeProfileInactive} /> : (
          <>
            <FontAwesomeIcon icon={faCircleUser} className="profile-img" />
            <span className='profile-name'>Andy Jones</span>
          </>
        )}
    </div>
  )
}
