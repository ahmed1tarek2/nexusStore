import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  VStack,
  Text,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";
import {
  MdArrowForward,
  MdLocalMall,
  MdBolt,
  MdHeadphones,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SLIDES = [
  {
    badge: "Annual Spring Global Expo 2025",
    title: "Mega Tech & Spring Fashion Festival",
    body: "Curated precision electronics, tailored seasonal wardrobe essentials, and artisanal interior pieces discounted up to 60% with instant priority checkout.",
    productName: "Pro Acoustic V9 ANC",
    productMeta: "Electronics • Verified Refurb & New",
    price: "$139.00",
    discount: "60% Off",
    pill: "Save Up to $240 Today",
    img: "/assets/firstSlider.png",
  },
  {
    badge: "Summer Home Refresh",
    title: "Interior Essentials, Redefined",
    body: "Handpicked furniture, decor, and lighting pieces crafted for modern living — with white-glove delivery included.",
    productName: "Nordic Oak Lounge Chair",
    productMeta: "Home & Living • Limited Batch",
    price: "$289.00",
    discount: "35% Off",
    pill: "New Arrivals This Week",
    img: "/assets/secondSlider.png",
  },
  {
    badge: "Athlete Series Drop",
    title: "Performance Gear for Every Sport",
    body: "Engineered fabrics, breathable design, and pro-level durability across our new performance collection.",
    productName: "AeroFlex Running Jacket",
    productMeta: "Sports & Outdoor • Bestseller",
    price: "$74.00",
    discount: "20% Off",
    pill: "Free Shipping Included",
    img: "/assets/thirdSlider.png",
  },
];

function HeroSlide({ slide }) {
  return (
    <Box
      position="relative"
      w="100%"
      overflow="hidden"
      bg="#061449"
      color="white"
    >
      <Box
        position="relative"
        maxW="1440px"
        mx="auto"
        px={{ base: 4, lg: 8 }}
        py={16}
        minH="480px"
        display="flex"
        alignItems="center"
      >
        <Box
          position="absolute"
          top="-96px"
          right="-96px"
          w="384px"
          h="384px"
          borderRadius="full"
          bg="#fe6a3433"
          filter="blur(64px)"
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom="0"
          left="33%"
          w="320px"
          h="320px"
          borderRadius="full"
          bg="#505b9240"
          filter="blur(64px)"
          pointerEvents="none"
        />

        <Grid
          templateColumns="repeat(12, 1fr)"
          gap={8}
          alignItems="center"
          w="100%"
          zIndex={1}
        >
          <GridItem colSpan={7}>
            <VStack align="flex-start" gap={4}>
              <HStack
                gap={2}
                bg="#1e2a5ecc"
                color="#ffb59d"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="12px"
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                <Box w="8px" h="8px" borderRadius="full" bg="#fe6a34" />
                <Text>{slide.badge}</Text>
              </HStack>

              <Heading
                fontSize={{ base: "32px", md: "48px" }}
                lineHeight="1.15"
                letterSpacing="tight"
                color="white"
              >
                {slide.title}
              </Heading>

              <Text fontSize="16px" color="#dde1ff" maxW="xl">
                {slide.body}
              </Text>

              <HStack gap={4} pt={2}>
                <HStack
                  as="a"
                  href="#"
                  gap={2}
                  bg="#ab3500"
                  _hover={{ bg: "#fe6a34" }}
                  color="white"
                  px={8}
                  py={3}
                  borderRadius="base"
                  fontSize="16px"
                  fontWeight="600"
                  boxShadow="md"
                >
                  <Text>Shop Festival Deals</Text>
                  <Icon asChild boxSize="20px">
                    <MdArrowForward />
                  </Icon>
                </HStack>

                <HStack
                  as="a"
                  href="#"
                  gap={2}
                  bg="#1e2a5e99"
                  _hover={{ bg: "#1e2a5e" }}
                  color="white"
                  px={6}
                  py={3}
                  borderRadius="base"
                  fontSize="16px"
                  fontWeight="600"
                >
                  <Icon asChild boxSize="18px">
                    <MdLocalMall />
                  </Icon>
                  <Text>Explore Lookbook</Text>
                </HStack>
              </HStack>

              <HStack
                gap={6}
                pt={3}
                color="#dde1ff"
                fontSize="12px"
                wrap="wrap"
              >
                <HStack gap={1}>
                  <Icon asChild boxSize="16px" color="#ffb59d">
                    <MdBolt />
                  </Icon>
                  <Text>Flash inventory updated every 60s</Text>
                </HStack>
                <Text>•</Text>
                <Text>Zero tariff customs clearing</Text>
                <Text>•</Text>
                <Text>Over 1.4M satisfied buyers</Text>
              </HStack>
            </VStack>
          </GridItem>

          <GridItem colSpan={5}>
            <Flex justify="flex-end">
              <Box
                position="relative"
                w="100%"
                maxW="460px"
                h="380px"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="2xl"
                bg="#1e2a5e"
              >
                <Image
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  src={slide.img}
                  alt={slide.productName}
                />
                <Box
                  w="100%"
                  h="100%"
                  position="absolute"
                  inset="0"
                  background="linear-gradient(to top, rgba(6, 20, 73, 0.95), rgba(6, 20, 73, 0.2), transparent)"
                />

                <Flex
                  position="absolute"
                  bottom={4}
                  left={4}
                  right={4}
                  align="center"
                  justify="space-between"
                  bg="#ffffffe6"
                  backdropFilter="blur(8px)"
                  p={3}
                  borderRadius="lg"
                  boxShadow="lg"
                >
                  <HStack gap={2}>
                    <Flex
                      w="40px"
                      h="40px"
                      borderRadius="lg"
                      bg="#e5eeff"
                      align="center"
                      justify="center"
                      color="#061449"
                    >
                      <Icon asChild boxSize="20px">
                        <MdHeadphones />
                      </Icon>
                    </Flex>
                    <VStack gap={0} align="flex-start">
                      <Text fontSize="14px" fontWeight="600" color="#0b1c30">
                        {slide.productName}
                      </Text>
                      <Text fontSize="10px" color="#45464f">
                        {slide.productMeta}
                      </Text>
                    </VStack>
                  </HStack>
                  <VStack gap={0} align="flex-end">
                    <Text
                      fontSize="10px"
                      fontWeight="bold"
                      color="#ab3500"
                      textTransform="uppercase"
                    >
                      {slide.discount}
                    </Text>
                    <Text fontSize="18px" fontWeight="bold" color="#061449">
                      {slide.price}
                    </Text>
                  </VStack>
                </Flex>

                <Box
                  position="absolute"
                  top={4}
                  left={4}
                  bg="#ab3500"
                  color="white"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="12px"
                  fontWeight="bold"
                  boxShadow="md"
                >
                  {slide.pill}
                </Box>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

function Swipy() {
  return (
    <Box position="relative">
      <style>{`
        .swipy-pagination {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .swipy-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #dde1ff66;
          opacity: 1;
          margin: 0 !important;
          transition: all 0.3s ease;
        }
        .swipy-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background: #ab3500;
        }
          .swiper-button-next,
          .swiper-button-prev {
           position: absolute !important;
           top: auto !important;
          margin-top: 0 !important;
         }
      `}</style>

      <Swiper
        className="swiper"
        modules={[Navigation, Autoplay, Pagination]}
        loop
        loopAdditionalSlides={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swipy-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots container — يطابق موقعها في الصورة (يسار أسفل) */}
      <Box
        className="swipy-pagination"
        position="absolute"
        bottom={21}
        left={{ base: 4, lg: "70px" }}
        zIndex={20}
      />

      {/* Prev / Next buttons */}
      <Flex
        className="swiper-button-prev"
        position="absolute"
        bottom={4}
        right={{ base: "56px", lg: "115px" }}
        zIndex={20}
        w="32px"
        h="32px"
        borderRadius="full"
        bg="#1e2a5ecc"
        _hover={{ bg: "#1e2a5e" }}
        color="white"
        align="center"
        justify="center"
        cursor="pointer"
        _after={{ display: "none" }}
      >
        <Icon asChild boxSize="18px">
          <MdChevronLeft />
        </Icon>
      </Flex>

      <Flex
        className="swiper-button-next"
        position="absolute"
        bottom={4}
        right={{ base: 4, lg: 20 }}
        zIndex={20}
        w="32px"
        h="32px"
        borderRadius="full"
        bg="#1e2a5ecc"
        _hover={{ bg: "#1e2a5e" }}
        color="white"
        align="center"
        justify="center"
        cursor="pointer"
        _after={{ display: "none" }}
      >
        <Icon asChild boxSize="18px">
          <MdChevronRight />
        </Icon>
      </Flex>
    </Box>
  );
}

export default Swipy;
