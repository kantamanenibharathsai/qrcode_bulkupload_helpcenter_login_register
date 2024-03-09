import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register_page/RegisterPage';
import LoginPage from './pages/login_page/LoginPage';

import BulkUpload from './pages/bulk_upload/BulkUpload';
import LandingPage from './pages/landing_page/LandingPage';
import HelpCenter from './pages/help_center/HelpCenter';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/bulk-upload" element={<BulkUpload />} />
        <Route path="/qr-code" element={<BulkUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
