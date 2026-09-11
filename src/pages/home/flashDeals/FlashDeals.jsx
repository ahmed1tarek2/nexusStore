import React from "react";
import FlashDealsBar  from "./FlashdealsBar";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  VStack,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
const DEALS = [
  {
    brand: "AudioTech Pro",
    title: "AuraMax Wireless ANC...",
    price: "$129.00",
    oldPrice: "$235.00",
    discount: "-45%",
    claimed: 84,
    left: "12 Left",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500",
  },
  {
    brand: "Visionary Optix",
    title: '55" Quantum OLED Smart TV',
    price: "$699.00",
    oldPrice: "$999.00",
    discount: "-30%",
    claimed: 92,
    left: "4 Left",
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
  },
  {
    brand: "Nordic Atelier",
    title: "Heavy French Linen Overshirt",
    price: "$49.50",
    oldPrice: "$99.00",
    discount: "-50%",
    claimed: 67,
    left: "38 Left",
    img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500",
  },
  {
    brand: "RoboClean Lab",
    title: "LiDAR Smart Robot Mop & Vac",
    price: "$349.00",
    oldPrice: "$540.00",
    discount: "-35%",
    claimed: 76,
    left: "19 Left",
    img: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500",
  },
  {
    brand: "ErgoForm Studio",
    title: "PostureMesh Executive Des...",
    price: "$219.00",
    oldPrice: "$365.00",
    discount: "-40%",
    claimed: 88,
    left: "7 Left",
    img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500",
  },
];
function DealCard({ deal }) {
  return (
    <Box
      bg="white"
      borderRadius="12px"
      border="1px solid #e7e9f3"
      overflow="hidden"
      cursor="pointer"
      transition="box-shadow 0.2s ease"
      _hover={{ boxShadow: "md" }}
    >
      {" "}
      {/* Product Image */}{" "}
      <Box position="relative" w="100%" h="230px" bg="#f4f5fb">
        {" "}
        <Image
          src={deal.img}
          alt={deal.title}
          w="100%"
          h="100%"
          objectFit="cover"
        />{" "}
        {/* Discount */}{" "}
        <Box
          position="absolute"
          top={3}
          left={3}
          bg="#ab3500"
          color="white"
          fontSize="12px"
          fontWeight="700"
          px={2}
          py="2px"
          borderRadius="6px"
        >
          {" "}
          {deal.discount}{" "}
        </Box>{" "}
        {/* Favorite */}{" "}
        <Flex
          position="absolute"
          top={3}
          right={3}
          w="30px"
          h="30px"
          borderRadius="full"
          bg="whiteAlpha.900"
          align="center"
          justify="center"
          color="#3a3f55"
          boxShadow="sm"
        >
          {" "}
          <FiHeart size={16} />{" "}
        </Flex>{" "}
      </Box>{" "}
      {/* Product Info */}{" "}
      <VStack align="flex-start" gap="6px" p={4}>
        {" "}
        {/* Brand */}{" "}
        <Text
          fontSize="11px"
          fontWeight="700"
          color="#8a8d9f"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {" "}
          {deal.brand}{" "}
        </Text>{" "}
        {/* Title */}{" "}
        <Text
          fontSize="15px"
          fontWeight="700"
          color="#061449"
          lineHeight="1.3"
          lineClamp={1}
        >
          {" "}
          {deal.title}{" "}
        </Text>{" "}
        {/* Price */}{" "}
        <HStack gap={2} pt="2px">
          {" "}
          <Text fontSize="18px" fontWeight="800" color="#ab3500">
            {" "}
            {deal.price}{" "}
          </Text>{" "}
          <Text fontSize="13px" color="#a3a6b8" textDecoration="line-through">
            {" "}
            {deal.oldPrice}{" "}
          </Text>{" "}
        </HStack>{" "}
        {/* Claimed */}{" "}
        <VStack align="flex-start" w="100%" gap="6px" pt={2}>
          {" "}
          <Flex justify="space-between" w="100%">
            {" "}
            <Text fontSize="12px" color="#3a3f55" fontWeight="500">
              {" "}
              Claimed: {deal.claimed}%{" "}
            </Text>{" "}
            <Text fontSize="12px" fontWeight="700" color="#ab3500">
              {" "}
              {deal.left}{" "}
            </Text>{" "}
          </Flex>{" "}
          {/* Progress Bar */}{" "}
          <Box
            w="100%"
            h="6px"
            bg="#e7e9f3"
            borderRadius="full"
            overflow="hidden"
          >
            {" "}
            <Box
              h="100%"
              w={`${deal.claimed}%`}
              bg="#ab3500"
              borderRadius="full"
            />{" "}
          </Box>{" "}
        </VStack>{" "}
      </VStack>{" "}
    </Box>
  );
}
function FlashDeals() {
  return (
    <Box w="100%" bg="#f4f5fb" px={{ base: 4, lg: 8 }} py={8}>
      {" "}
      <FlashDealsBar />{" "}
      <Grid
        maxW="1440px"
        mx="auto"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={4}
      >
        {" "}
        {DEALS.map((deal, i) => (
          <GridItem key={i}>
            {" "}
            <DealCard deal={deal} />{" "}
          </GridItem>
        ))}{" "}
      </Grid>{" "}
    </Box>
  );
}
export default FlashDeals;
