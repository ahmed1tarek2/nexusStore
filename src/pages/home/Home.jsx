import { Box } from "@chakra-ui/react";
import React from "react";
import { TrustBar } from "./TrustBar";
import Swipy from "./Swiper/Swiper";
import ShopByDepartment from "./ShopByDepartment";

function Home() {
  return (
    <Box>
      <TrustBar />
      <Swipy />
      <ShopByDepartment />
    </Box>
  );
}

export default Home;
