"use client";

import { createContext, useContext, useState, useCallback, useMemo } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;
  authMode: 'login' | 'signup';
  setAuthMode: (mode: 'login' | 'signup') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users database
const mockUsers: { email: string; password: string; user: User }[] = [];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const foundUser = mockUsers.find((u) => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser.user);
      setIsAuthOpen(false);
      return true;
    }

    // Demo account for testing
    if (email === 'demo@demo.com' && password === 'demo123') {
      const demoUser: User = {
        id: 'demo-1',
        email: 'demo@demo.com',
        name: 'Demo User',
        avatar: '/images/author-avatar.jpg',
      };
      setUser(demoUser);
      setIsAuthOpen(false);
      return true;
    }

    return false;
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check if user already exists
    if (mockUsers.some((u) => u.email === email)) {
      return false;
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      name,
      avatar: '/images/author-avatar.jpg',
    };

    mockUsers.push({ email, password, user: newUser });
    setUser(newUser);
    setIsAuthOpen(false);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      signup,
      logout,
      isAuthOpen,
      setIsAuthOpen,
      authMode,
      setAuthMode,
    }),
    [user, login, signup, logout, isAuthOpen, authMode]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
