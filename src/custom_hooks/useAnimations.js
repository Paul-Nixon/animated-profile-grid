import React from 'react'

export default function useAnimations(ref, animation) {
  switch (animation)
  {
      case "fade-in":
        ref.current.class.animation = `${animation} 350ms ease-in-out forwards`;
        break;
      case "fade-out":
        ref.current.class.animation = `${animation} 350ms ease-in-out forwards`;
        break;
  }
}
