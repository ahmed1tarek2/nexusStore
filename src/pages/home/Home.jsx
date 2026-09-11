import { Box } from "@chakra-ui/react";
import React from "react";
import { TrustBar } from "./TrustBar";
import Swipy from "./Swiper/Swiper";
import ShopByDepartment from "./ShopByDepartment";
import FlashDeals from "./flashDeals/FlashDeals";
import FeaturedCategoryHubs from "./FeaturedCategoryHubs";
import BrandAlliances from "./BrandAlliances";

function Home() {
  return (
    <Box>
      <TrustBar />
      <Swipy />
      <ShopByDepartment />
      <FlashDeals />
      <FeaturedCategoryHubs />
      <BrandAlliances />
    </Box>
  );
}

export default Home;
