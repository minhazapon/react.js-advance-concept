import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Root from './Root';
import UseId from './useId/UseId';
import PD from './props driling/PD';
import Context, { UserContext } from './context API/Context';
import UseHooks from './use hook/UseHook.server';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/id",
        element: <UseId></UseId>,
      },
      {
        path: "/pd",
        element: <PD></PD>,
      },
      {
        path: "/context",
        element: <Context></Context>,
      },
      {
        path: "/use",
        element: <UseHooks></UseHooks>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext.Provider>
      <RouterProvider router={router} />
    </UserContext.Provider>
  </StrictMode>,
)
