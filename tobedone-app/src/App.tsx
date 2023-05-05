import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



//Routes and loaders
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

//Layouts
import Main, { mainLoader } from "./layouts/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />
      },
    ]
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
