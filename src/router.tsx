import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './components';
import { Home } from './pages';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  }
]);

export default router;