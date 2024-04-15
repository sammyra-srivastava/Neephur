import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import StoreIcon from '@mui/icons-material/Store';




const Admin = () => {
  const options = [
    {
      name: "Add New Florist",
      icon: <AddBusinessIcon />,
      link: "/admin/addflorist",
    },
    {
      name: "Manage Florist",
      icon: <StoreIcon />,
      link: "/admin/managerflorist",
    },
    {
      name: "Manage Flowers",
      icon: <LocalFloristIcon />,
      link: "/admin/manageflower",
    },
  ];


  return (
    <Sidebar title="Admin Dashboard" options={options}>

      <Outlet />
    </Sidebar>
  );
};

export default Admin;
