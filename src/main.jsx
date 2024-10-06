import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Root from './components/Root/Root';
import UseInfo from './components/UserInfo/UseInfo';
import './index.css';
import UserProvider from './providers/userProvider';
import PrivateRoute from './route/privateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/register",
        element:<Register/>
      },
      {
        path: "/userInfo",
        element: <PrivateRoute><UseInfo /></PrivateRoute>
}
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)
