/**
 * Transition Preset System
 */

import { timings, durations } from './timings';

export const transitions = {
  fade: {
    transition: `opacity ${durations.normal} ${timings.easeInOut}`,
  },
  
  slide: {
    transition: `transform ${durations.normal} ${timings.easeOut}`,
  },
  
  scale: {
    transition: `transform ${durations.fast} ${timings.easeOut}`,
  },
  
  all: {
    transition: `all ${durations.normal} ${timings.easeInOut}`,
  },
  
  colors: {
    transition: `background-color ${durations.fast} ${timings.easeInOut}, 
                 color ${durations.fast} ${timings.easeInOut}, 
                 border-color ${durations.fast} ${timings.easeInOut}`,
  },
};

export const createTransition = (
  property: string,
  duration: keyof typeof durations = 'normal',
  timing: keyof typeof timings = 'easeInOut'
) => ({
  transition: `${property} ${durations[duration]} ${timings[timing]}`,
});
