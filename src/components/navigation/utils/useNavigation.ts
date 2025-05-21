import { useState, useEffect } from 'react';

export interface NavigationState {
  currentPath: string;
  previousPath: string | null;
  isNavigating: boolean;
}

export const useNavigation = () => {
  const [state, setState] = useState<NavigationState>({
    currentPath: typeof window !== 'undefined' ? window.location.pathname : '/',
    previousPath: null,
    isNavigating: false,
  });
  
  useEffect(() => {
    const handleNavigation = () => {
      setState(prev => ({
        currentPath: window.location.pathname,
        previousPath: prev.currentPath,
        isNavigating: false,
      }));
    };
    
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);
  
  const navigate = (path: string) => {
    setState(prev => ({
      ...prev,
      isNavigating: true,
    }));
    window.history.pushState({}, '', path);
    setState(prev => ({
      currentPath: path,
      previousPath: prev.currentPath,
      isNavigating: false,
    }));
  };
  
  const goBack = () => {
    window.history.back();
  };
  
  const goForward = () => {
    window.history.forward();
  };
  
  return {
    ...state,
    navigate,
    goBack,
    goForward,
  };
};
