import React, { useRef } from 'react';

import Profile from './Profile';

import useAnimations from '../custom_hooks/useAnimations';


export default function Grid() {
  const gridRef = useRef();

  function animateGrid(isRendered)
  {

  }

  return (
    <div className='grid' ref={gridRef}>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
    </div>
  )
}
