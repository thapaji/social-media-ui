import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/user/Login";
import "./App.css";
import Home from "./pages/private/home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        /************** Private Routes ****************/
        <Route path="/home" element={<Home />} />
        {/* <Route path="/"  element={ <Auth><AdminLayout /></Auth>} >
          <Route path="/admin/new" element={<Register />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/reviews" element={<Reviews />} />
          <Route path="/admin/admins" element={<Admins />} />
          <Route path="/admin/profile" element={<Profile />} />
        </Route> */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
