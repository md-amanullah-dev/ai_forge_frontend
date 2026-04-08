import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '@/lib/api-client';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: true,

      login: (userData, token) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('auth_token', token);
        }
        set({
          user: userData,
          token: token,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      logout: () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('auth_token');
        }
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      updateUser: (userData) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ user: { ...currentUser, ...userData } });
        }
      },

      checkAuth: async () => {
        set({ isLoading: true });
        const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
        
        if (!token) {
          set({ user: null, token: null, isAuthenticated: false, isLoading: false });
          return;
        }

        try {
          const response = await api.get('/users/me');
          if (response.data.success) {
            set({
              user: response.data.data,
              token: token,
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            throw new Error('Auth failed');
          }
        } catch (error) {
          if (typeof window !== 'undefined') {
            localStorage.removeItem('auth_token');
          }
          set({ user: null, token: null, isAuthenticated: false, isLoading: false });
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, token: state.token, isAuthenticated: state.isAuthenticated }),
    }
  )
);
