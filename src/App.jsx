import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home";
import NotFound from "./Screens/NotFound";
import Login from "./Screens/Login";
function App() {
  const router = createBrowserRouter([
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
