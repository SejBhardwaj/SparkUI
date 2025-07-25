import { useState } from 'react';
export const useCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return { isExpanded, toggle: () => setIsExpanded(!isExpanded) };
};
