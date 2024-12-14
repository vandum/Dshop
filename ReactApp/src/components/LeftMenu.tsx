// src/components/LeftMenu.tsx
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import { Link as RouterLink } from 'react-router-dom';

interface LeftMenuProps {
  open: boolean;
  onClose: () => void;
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
    marginTop: 64,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      zIndex: theme.zIndex.drawer + 1,
    },
  },
}));

const LeftMenu: React.FC<LeftMenuProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant={isMobile ? 'temporary' : 'persistent'}
      sx={{
        '& .MuiBackdrop-root': {
          display: 'none',
        },
      }}
    >
      <List>
        <ListItem component={RouterLink} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={RouterLink} to="/users">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem component={RouterLink} to="/warehouse">
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Warehouse" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

export default LeftMenu;