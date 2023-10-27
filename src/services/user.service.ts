import User from '../models/User';
import { API_ADDRESS } from '../resources/consts';

export const registerUser = async (user: User): Promise<User> => {
  const response = await fetch(`${API_ADDRESS}/user`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if(!response.ok) throw new Error('Ocorreu um erro na requisição');

  const { data } = await response.json();
  return data;
}