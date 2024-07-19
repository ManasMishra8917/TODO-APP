import React, { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Auth = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to check authentication status
    const checkAuth = async () => {
      try {
        // Here you might want to check token validity, etc.
        // For now, just simulate a delay
        setLoading(false);
      } catch (error) {
        console.error('Error checking authentication', error);
        logout(); // Log out user in case of error
        setLoading(false);
      }
    };

    checkAuth();
  }, [logout]);

  if (loading) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Auth;
