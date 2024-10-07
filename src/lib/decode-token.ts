import { jwtDecode, JwtPayload } from 'jwt-decode';

export const decodeToken = (token: string | null): JwtPayload | null => {
  try {
    const decoded = jwtDecode<JwtPayload>(token || '');
    return decoded;
  } catch (error) {
    console.error('Token inválido ou malformado', error);
    return null;
  }
};
