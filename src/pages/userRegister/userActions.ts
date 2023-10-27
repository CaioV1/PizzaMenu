import { ActionFunctionArgs } from 'react-router-dom';
import { registerUser } from '../../services/user.service';

export const action = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  await registerUser(data);
  console.log(data);
  return null
}