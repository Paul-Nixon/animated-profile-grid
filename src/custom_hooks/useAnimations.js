import React from 'react';

export default function useAnimations(ref, animation) {
  switch (animation)
  {
      case "fade-in":
        ref.current.classList.replace("fade-out", "fade-in");
        break;
      case "fade-out":
        ref.current.classList.add("fade-out");
        break;
  }
}
