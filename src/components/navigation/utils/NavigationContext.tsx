import React, { createContext, useContext, useState } from 'react';

interface NavigationContextValue {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within NavigationProvider');
  }
  return context;
};

export interface NavigationProviderProps {
  children: React.ReactNode;
  initialRoute?: string;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ 
  children, 
  initialRoute = '/' 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(initialRoute);
  
  return (
    <NavigationContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        mobileMenuOpen,
        setMobileMenuOpen,
        currentRoute,
        setCurrentRoute,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
