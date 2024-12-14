import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/users/Users';
import NotFound from './pages/NotFound';
import Warehouse from './pages/warehouse/Warehouse';


const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="warehouse" element={<Warehouse />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
};

export default App;