/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Layout from './components/Layout';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
