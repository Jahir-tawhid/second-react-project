import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Blogs from "../pages/Blogs";
import Login from "../pages/auth/Login"; // আপনার ফোল্ডার অনুযায়ী পাথ
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
