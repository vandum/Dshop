// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    position: 'fixed',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));

interface HeaderProps {
    onToggleDrawer: () => void;
  }
  
  const Header: React.FC<HeaderProps> = ({ onToggleDrawer }) => {
    return (
      <StyledAppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={onToggleDrawer}>
            <MenuIcon />
          </IconButton>
          <StyledTypography variant="h6">My App</StyledTypography>
        </Toolbar>
      </StyledAppBar>
    );
  };
export default Header;