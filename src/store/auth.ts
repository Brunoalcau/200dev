import { storage } from '@/config/storage';
import { decodeToken } from '@/lib/decode-token';
import { authService } from '@/services/auth.service';
import { AxiosError } from 'axios';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '../interface/User';
import { AuthDTO } from './dto/get-store-auth';
import { useAbilityStore } from './role';

interface AuthStore {
  user: string | null;
  token: string | null;
  loading: boolean;
  hasErrors: boolean;
  auth: (user: User) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      hasErrors: false,

      auth: async (user: User) => {
        set({ loading: true, hasErrors: false });
        try {
          const response = await authService.auth(user);
          const { access_token } = response.data;

          const decodedToken = decodeToken(access_token);
          console.log(decodedToken);

          const setRole = useAbilityStore.getState().setRole;
          setRole(decodedToken?.sub);
          set({
            user: user.username,
            token: access_token,
            loading: false,
            hasErrors: false,
          });
        } catch (error) {
          console.error('Authentication error:', error);
          set({ hasErrors: true, loading: false });

          if (error instanceof AxiosError) {
            throw new Error(error?.response?.data?.detail);
          }
        } finally {
          set({ loading: false });
        }
      },
      logout: () => {
        set({
          user: null,
          token: null,
          loading: false,
          hasErrors: false,
        });
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => {
        const auth: AuthDTO = storage.getData('auth') as AuthDTO;
        if (auth?.state?.token) {
          const setRole = useAbilityStore.getState().setRole;
          const decode = decodeToken(auth?.state?.token);
          setRole(decode?.sub);
        }
      },
    }
  )
);
