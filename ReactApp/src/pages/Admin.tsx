// src/Admin.tsx
import React, { useState } from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { Box, Toolbar, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
}));

const MainContent = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean }>(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: open ? 240 : 0,
      width: open ? `calc(100% - ${240}px)` : '100%',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  })
);

const theme = createTheme();

const Admin: React.FC = () => {
  const [open, setOpen] = useState(true);
  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const themeRef = useTheme();
  const isMobile = useMediaQuery(themeRef.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        <CssBaseline />
        <Header onToggleDrawer={handleToggleDrawer} />
        <LeftMenu open={open} onClose={handleToggleDrawer} />
        <MainContent open={!isMobile && open}>
          <DrawerHeader />
          <Outlet />
          {/* <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="*" element={<NotFound />} />
          </Routes> */}
        </MainContent>
      </StyledBox>
    </ThemeProvider>
  );
};

export default Admin;