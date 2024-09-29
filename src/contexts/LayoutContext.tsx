'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  // useEffect,
  useState,
} from 'react';

// type Theme = 'light' | 'dark' | 'default';

type LayoutContextType = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  loginModalToggle: boolean;
  setLoginModalToggle: (toggle: boolean) => void;
  signupModalToggle: boolean;
  setSignupModalToggle: (toggle: boolean) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
  sidebarClass: string;
  setSidebarClass: (sidebarClass: string) => void;
  forgotPasswordModalToggle: boolean;
  setForgotPasswordModalToggle: (toggle: boolean) => void;
  newPasswordModalToggle: boolean;
  setNewPasswordModalToggle: (toggle: boolean) => void;
  // theme: Theme;
  // toggleTheme: () => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  setup2FAEmailModalToggle: boolean;
  setSetup2FAEmailModalToggle: (open: boolean) => void;
  setup2FAAppModalToggle: boolean;
  setSetup2FAAppModalToggle: (open: boolean) => void;
  disable2FA: boolean;
  setDisable2FA: (open: boolean) => void;
  typeDisable2FA: string;
  setTypeDisable2FA: (open: string) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};

type LayoutProviderProps = {
  children: ReactNode;
};

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [sidebarOpen, setSidebar] = useState(
    localStorage.getItem('sidebar-open') === 'true'
  );
  const [open, setOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loginModalToggle, setLoginModalToggle] = useState<boolean>(false);
  const [signupModalToggle, setSignupModalToggle] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sidebarClass, setSidebarClass] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [setup2FAEmailModalToggle, setSetup2FAEmailModalToggle] =
    useState<boolean>(false);
  const [setup2FAAppModalToggle, setSetup2FAAppModalToggle] =
    useState<boolean>(false);
  const [disable2FA, setDisable2FA] = useState<boolean>(false);
  const [typeDisable2FA, setTypeDisable2FA] = useState<string>('');
  const [forgotPasswordModalToggle, setForgotPasswordModalToggle] =
    useState(false);
  const [newPasswordModalToggle, setNewPasswordModalToggle] = useState(false);

  const setSidebarOpen = (isSidebarOpen: boolean) => {
    setSidebar(isSidebarOpen);
    localStorage.setItem('sidebar-open', JSON.stringify(isSidebarOpen));
  };

  return (
    <LayoutContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        open,
        setOpen,
        isCollapsed,
        setIsCollapsed,
        loginModalToggle,
        setLoginModalToggle,
        signupModalToggle,
        setSignupModalToggle,
        isDropdownOpen,
        setIsDropdownOpen,
        sidebarClass,
        setSidebarClass,
        forgotPasswordModalToggle,
        setForgotPasswordModalToggle,
        newPasswordModalToggle,
        setNewPasswordModalToggle,
        // theme,
        // toggleTheme,
        searchOpen,
        setSearchOpen,
        setup2FAEmailModalToggle,
        setSetup2FAEmailModalToggle,
        setup2FAAppModalToggle,
        setSetup2FAAppModalToggle,
        disable2FA,
        setDisable2FA,
        typeDisable2FA,
        setTypeDisable2FA,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
