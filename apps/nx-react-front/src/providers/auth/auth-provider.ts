import { AuthProvider } from '@refinedev/core';

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const { accessToken } = await res.json();
        localStorage.setItem('token', accessToken);
        return { success: true, redirectTo: '/' };
      }

      return {
        success: false,
        error: {
          name: 'LoginError',
          message: 'Invalid credentials',
        },
      };
    } catch (error) {
      return {
        success: false,
        error: {
          name: 'NetworkError',
          message: 'Login request failed',
        },
      };
    }
  },

  logout: async () => {
    localStorage.removeItem('token');
    return { success: true, redirectTo: '/login' };
  },

  check: async () => {
    const token = localStorage.getItem('token');
    if (token) {
      return { authenticated: true };
    } else {
      return {
        authenticated: false,
        redirectTo: '/login',
        error: { name: 'AuthError', message: 'User not authenticated' },
      };
    }
  },

  getIdentity: async () => {
    return {
      id: 1,
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/300',
    };
  },

  getPermissions: async () => null,

  // 🔧 Required method
  onError: async (error) => {
    console.error('Auth error:', error);
    return { logout: false };
  },
};
