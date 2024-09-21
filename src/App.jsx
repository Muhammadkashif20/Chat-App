import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home";
import NotFound from "./Screens/NotFound";
import Login from "./Screens/Login";
import Loading from "./Screens/Loading";
function App() {
  const router = createBrowserRouter([
    {path: "/",element: <Loading/>},
    {path: "/login",element: <Login/>},
    {path: "/home",element: <Home/>},
    {path: "/*",element: <NotFound/>},
])
return( 
  <>
  <div>
<RouterProvider router={router} />
  </div>
  </>
)
}
export default App;
