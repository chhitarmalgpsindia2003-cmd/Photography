import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from './Layout/layout';
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
// import { Bday } from "./Pages/Bday"
import Bday from "./Pages/Bday";
import { Prewedding } from "./Pages/Prewedding"
import { Event } from './Pages/Event';
import { Wedding } from './Pages/Wedding'
import { Portfolio } from './Pages/Portfolio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/wedding",
        element: <Wedding />
      },
      {
        path: "/prewedding",
        element: <Prewedding />
      },
      {
        path: "/birthday",
        element: <Bday />,
      },
      {
        path: "/event",
        element: <Event />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      }
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;

}
 
export default App