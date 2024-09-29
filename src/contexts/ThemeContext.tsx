'use client';

import React, { createContext, useEffect, useState } from 'react';
import { IconSpinner } from '@/assets/icons';

export type Colors = {
  primary: string;
  secondary: string;
  base100: string;
  base200: string;
  base300: string;
  success: string;
  error: string;
  accent: string;
  primaryContent: string;
  secondaryContent: string;
  baseContent: string;
  successContent: string;
  errorContent: string;
};

const initValueColors = {
  primary: '',
  secondary: '',
  base100: '',
  base200: '',
  base300: '',
  success: '',
  error: '',
  accent: '',
  primaryContent: '',
  secondaryContent: '',
  baseContent: '',
  successContent: '',
  errorContent: '',
};

export const ThemeContext = createContext<{
  theme: string;
  colors: Colors;
  changeTheme: (theme: string) => void;
  setColors: (colors: Colors) => void;
}>({
  theme: 'dark',
  colors: initValueColors,
  changeTheme: () => {},
  setColors: () => {},
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>('');
  const [colors, setColors] = useState<Colors>(initValueColors);

  const changeTheme = (thm: string) => {
    setTheme(thm);
    localStorage.setItem('theme', thm);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      const elmPrimary = document.querySelector('.bg-primary');
      const elmSecondary = document.querySelector('.bg-secondary');
      const elmBase100 = document.querySelector('.bg-base-100');
      const elmBase200 = document.querySelector('.bg-base-200');
      const elmBase300 = document.querySelector('.bg-base-300');
      const elmSuccess = document.querySelector('.bg-success');
      const elmError = document.querySelector('.bg-error');
      const elmAccent = document.querySelector('.bg-accent');
      const elmPrimaryCtn = document.querySelector('.bg-primary-content');
      const elmSecondaryCtn = document.querySelector('.bg-secondary-content');
      const elmBaseCtn = document.querySelector('.bg-base-content');
      const elmSuccessCtn = document.querySelector('.bg-success-content');
      const elmErrorCtn = document.querySelector('.bg-error-content');

      if (
        elmPrimary &&
        elmSecondary &&
        elmBase100 &&
        elmBase300 &&
        elmBase200 &&
        elmSuccess &&
        elmError &&
        elmAccent &&
        elmPrimaryCtn &&
        elmSecondaryCtn &&
        elmBaseCtn &&
        elmSuccessCtn &&
        elmErrorCtn
      ) {
        const primary = getComputedStyle(elmPrimary).backgroundColor;
        const secondary = getComputedStyle(elmSecondary).backgroundColor;
        const base100 = getComputedStyle(elmBase100).backgroundColor;
        const base200 = getComputedStyle(elmBase200).backgroundColor;
        const base300 = getComputedStyle(elmBase300).backgroundColor;
        const success = getComputedStyle(elmSuccess).backgroundColor;
        const error = getComputedStyle(elmError).backgroundColor;
        const accent = getComputedStyle(elmAccent).backgroundColor;
        const primaryContent = getComputedStyle(elmPrimaryCtn).backgroundColor;
        const secondaryContent =
          getComputedStyle(elmSecondaryCtn).backgroundColor;
        const baseContent = getComputedStyle(elmBaseCtn).backgroundColor;
        const successContent = getComputedStyle(elmSuccessCtn).backgroundColor;
        const errorContent = getComputedStyle(elmErrorCtn).backgroundColor;

        setColors({
          primary,
          secondary,
          base100,
          base200,
          base300,
          success,
          error,
          accent,
          primaryContent,
          secondaryContent,
          baseContent,
          successContent,
          errorContent,
        });
      }
    }, 200);
  }, [theme]);

  if (!theme) {
    return (
      <div className="flex h-svh w-screen flex-col items-center justify-center">
        <IconSpinner
          className="m-auto animate-spin"
          style={{ height: 30, width: 30 }}
        />
        <p className="mt-4 text-white/80">Loading...</p>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, colors, changeTheme, setColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
