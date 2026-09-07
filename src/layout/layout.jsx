import React from "react";
import { Outlet } from "react-router-dom";
import TopNave from "./navBar/TopNave";
import { Box } from "@chakra-ui/react";
import NavBar from "./navBar/NavBar";

function Layout() {
  return (
    <>
      <Box fixed top={0} left={0} right={0} zIndex={999}>
        <TopNave />
        <NavBar />
      </Box>

      <Outlet />
    </>
  );
}

export default Layout;
