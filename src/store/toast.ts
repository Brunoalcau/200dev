import { create } from 'zustand';

interface Toast {
  id: string;
  title: string;
  description: string;
  variant?: 'destructive' | 'default'; // Simplificado para opcional
  duration: number;
  isClosable: boolean;
}

interface ToastState {
  toasts: Toast[];
  addToast: (toast: Toast) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, toast],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
