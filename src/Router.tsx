import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home.page';
import RootLayout from './layout/RootLayout';
import NotFoundPage from './Pages/NotFound.page';
import SignUpPage from './Pages/SignUp.page';
import LoginPage from './Pages/Login.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
