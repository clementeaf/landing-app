import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { NotFoundPage } from '@/pages/NotFound';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
