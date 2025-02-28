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
import DeepDark from './Dark mode/DeepDark';
import ColorThemeProvider from './Dark mode/ThemeProvider2';
import Reducer from './use reducer/Reducer';
import Memo from './react memo/Memo';
import UM from './use memo/UM';
import Call from './useCallBack/Call';

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
        path: "/dark",
        element: <DeepDark></DeepDark>,
      },
      {
        path: "/re",
        element: <Reducer></Reducer>,
      },
      {
        path: "/memo",
        element: <Memo></Memo>,
      },
      {
        path: "/um",
        element: <UM></UM>,
      },
      {
        path: "/call",
        element: <Call></Call>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorThemeProvider>
      <RouterProvider router={router} />
    </ColorThemeProvider>
  </StrictMode >,
)
