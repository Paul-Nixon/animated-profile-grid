import React from 'react';

export default function useAnimations(ref, animation) {
  switch (animation)
  {
      case "fade-in":
        ref.current.classList.replace("fade-out", "fade-in");
        break;
      case "fade-out":
        if (ref.current.classList.contains("fade-in")) ref.current.classList.remove("fade-in");
        ref.current.classList.add("fade-out");
        break;
  }
}
