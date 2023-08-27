import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from './Header.styled';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
  return (
    <HeaderWrapper>
          <h1>Logo</h1>
        <span onClick={() => toggleTheme()}>{theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}</span>
        {/* <button onClick={() => toggleTheme()}>Toggle Theme</button> */}
    </HeaderWrapper>
  );
}

export default Header