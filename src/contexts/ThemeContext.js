/* Orange Copyright restricted MVP */
import React, { createContext } from 'react';
import useToggleState from '../UI_hooks/useToggleState';

export const ThemeContext = createContext();

export function DarkModeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggleState(true);

  return (
    <ThemeContext.Provider  value={{ isDarkMode, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}
