import { ReactNode, createContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface ContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ContextType>({
  isDarkMode: false,
  toggleTheme: () => null,
});

function ThemeProvider({ children }: ProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeContext.Provider
      value={{ isDarkMode: isDarkMode, toggleTheme: toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
