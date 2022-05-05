import React, { useRef } from 'react';

import Profile from './Profile';

import useAnimations from '../custom_hooks/useAnimations';


export default function Grid() {
  const gridRef = useRef();

  function animateGrid(isRendered)
  {
      isRendered ? useAnimations(gridRef, "fade-out") : useAnimations(gridRef, "fade-in");
  }

  return (
    <div className='grid' ref={gridRef}>
        <Profile animateGrid={animateGrid} />
        <Profile animateGrid={animateGrid} />
        <Profile animateGrid={animateGrid} />
        <Profile animateGrid={animateGrid} />
        <Profile animateGrid={animateGrid} />
        <Profile animateGrid={animateGrid} />
        <Profile animateGrid={animateGrid} />
        <Profile animateGrid={animateGrid} />
        <Profile animateGrid={animateGrid} />
    </div>
  )
}
