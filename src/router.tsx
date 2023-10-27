import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './components';
import { Home, UserRegister } from './pages';
import { action as userRegisterAction } from './pages/userRegister/userActions';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  },
  {
    path: '/userRegister',
    element: <UserRegister />,
    action: userRegisterAction
  }
]);

export default router;