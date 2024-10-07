import { useToastStore } from '@/store/toast';
import { v4 as uuidv4 } from 'uuid';

export const useErrorToast = () => {
  const addToast = useToastStore((state) => state.addToast);

  const showErrorToast = (message: string) => {
    const id = uuidv4();
    addToast({
      id,
      title: 'Erro',
      description: message,
      variant: 'destructive',
      duration: 5000,
      isClosable: true,
    });
  };

  return { showErrorToast };
};
