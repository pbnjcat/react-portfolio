import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home.page';
import RootLayout from './layout/RootLayout';
import NotFoundPage from './Pages/NotFound.page';

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
      // {
      //   path: "bookmarks",
      //   element: <Bookmarks />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: "history",
      //   element: <History />,
      //   errorElement: <Error />,
      // },
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
