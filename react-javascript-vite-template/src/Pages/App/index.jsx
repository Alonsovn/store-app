import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import "./App.css";
import Navbar from "../../Components/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
