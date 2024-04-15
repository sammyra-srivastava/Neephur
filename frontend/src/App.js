import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/admin/dashboard";
import Admin from "./components/admin/index";
import ManageUser from "./components/admin/manageUser";
import AdminProfile from "./components/admin/profile";
import BrowseFlower from "./components/main/browseFlower";
import Home from "./components/main/home";
import Main from "./components/main/index";
import SignIn from "./components/main/signin";
import NotFound from "./components/main/notFound";
import ResetPassword from "./components/main/resetPassword";
import Signup from "./components/main/signup";
import User from "./components/user/index";
import UserProfile from "./components/user/profile";
import AddFlorist from "./components/admin/addFlorist";
import ManageFlorist from "./components/admin/manageFlorist";
import ManageFlower from "./components/admin/manageFlower";
import BrowseFlorist from "./components/main/browseflorist";
import FloristList from "./components/main/floristlist";
import Checkout from "./components/main/checkout";
import ContactUs from "./components/main/contactUs";
import ShoppingCart from "./components/main/shoppingCart";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import UserAuthenticator from "./components/userAuthenticator";
import { Toaster } from "react-hot-toast";
import BrowseByFlorist from "./components/main/browseByFlorist";
import Profile from "./components/user/profile";
import ManageOrder from "./components/user/manageOrder";
import AdminAuthenticator from "./components/adminAuthenticator";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route
            element={
              <AdminAuthenticator>
                <Admin />
              </AdminAuthenticator>
            }
            path="admin"
          >
            <Route element={<AddFlorist />} path="addflorist" />
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<ManageUser />} path="manageuser" />
            <Route element={<ManageFlorist />} path="managerflorist" />
            <Route element={<ManageFlower />} path="manageflower" />
            <Route element={<AdminProfile />} path="adminprofile" />
            <Route element={<Dashboard />} path="dashboard" />
          </Route>
          <Route element={<Main />} path="main">
            <Route element={<Signup />} path="signup" />
            <Route element={<SignIn />} path="signin" />
            <Route element={<Home />} path="home" />
            <Route element={<NotFound />} path="404" />
            <Route element={<BrowseFlower />} path="browseflower" />
            <Route
              element={<BrowseFlorist />}
              path="browseflorist/:flowername"
            />
            <Route element={<FloristList />} path="floristlist" />
            <Route element={<FloristList />} path="floristlist" />
            <Route element={<BrowseByFlorist />} path="browsebyflorist/:id" />

            <Route element={<ResetPassword />} path="resetpassword" />
            <Route element={<Checkout />} path="checkout" />
            <Route element={<ContactUs />} path="contactus" />
            <Route
              element={
                <UserAuthenticator>
                  <ShoppingCart />
                </UserAuthenticator>
              }
              path="cart"
            />
          </Route>

          <Route element={<User />} path="user">
            <Route element={<Profile />} path="profile" />
            <Route element={<Sidebar />} path="sidebar" />
            <Route element={<ManageOrder />} path="manageorder" />
          </Route>

          <Route element={<Navigate to="/main/home" />} path="" />
          <Route element={<Navigate to="/main/404" />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
