import React from "react";

import {
  Box,
  Flex,
  HStack,
  Text,
  Input,
  Image,
  Button,
} from "@chakra-ui/react";

import {
  FiChevronDown,
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiMenu,
} from "react-icons/fi";
import CategoryDropdown from "./CategoryDropdown.jsx";

const NAV_LINKS = [
  { label: "Fashion", path: "fashion" },
  { label: "Electronics", path: "electronics" },
  { label: "Home & Living", path: "home-living" },
  { label: "Beauty", path: "beauty" },
  { label: "Sports", path: "sports" },
  { label: "Flash Deals", path: "flash-deals" },
];

function NavBar() {
  const activePath = "electronics";

  return (
    <Box>
      {/* TOP NAV */}
      <Box bg="white">
        <Flex
          maxW="1280px"
          mx="auto"
          minH={{ base: "70px", md: "80px" }}
          align="center"
          justify="space-between"
          gap={{ base: 3, md: 6 }}
          px={{ base: 4, md: 6, lg: 0 }}
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          py={{ base: 3, lg: 0 }}
        >
          {/* Logo */}
          <Box flexShrink={0} display="flex" alignItems="center">
            <Image
              src="/assets/screen.png"
              alt="NexusMart Logo"
              h={{ base: "36px", md: "40px", lg: "50px" }}
              w="auto"
              objectFit="contain"
              
            />
          </Box>

          {/* Search */}
          <Flex
            order={{ base: 3, lg: 2 }}
            flex={{ lg: 1 }}
            w={{ base: "100%", lg: "auto" }}
            maxW={{ lg: "672px" }}
            h={{ base: "42px", lg: "48px" }}
            align="center"
            bg="gray.50"
            borderRadius="lg"
            p={1}
          >
            {/* Categories */}
            <HStack
              px={{ base: 2, md: 3 }}
              color="gray.600"
              fontSize="sm"
              cursor="pointer"
              flexShrink={0}
              gap={1}
              display={{ base: "none", md: "flex" }}
            >
              <CategoryDropdown />
            </HStack>

            {/* Divider */}
            <Box
              h={6}
              w="1px"
              bg="gray.300"
              mx={2}
              display={{ base: "none", md: "block" }}
            />

            {/* Input */}
            <Input
              placeholder="Search millions of products, brands and deals..."
              variant="unstyled"
              px={2}
              fontSize={{ base: "xs", md: "sm" }}
              color="gray.800"
              _placeholder={{ color: "gray.400" }}
              flex={1}
            />

            {/* Search Button */}
            <Button
              bg="#08164B"
              color="white"
              _hover={{ bg: "#122468" }}
              h={{ base: "34px", lg: "40px" }}
              minW={{ base: "40px", lg: "48px" }}
              px={{ base: 3, lg: 5 }}
              borderRadius="md"
              flexShrink={0}
            >
              <FiSearch size={20} />
            </Button>
          </Flex>

          {/* Account / Wishlist / Cart */}
          <HStack
            order={{ base: 2, lg: 3 }}
            gap={{ base: 2, md: 4, lg: 6 }}
            flexShrink={0}
          >
            {/* Account */}
            <HStack
              gap={2}
              cursor="pointer"
              display={{ base: "none", md: "flex" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTOurIuQMHKXu7uiugMcIxKVkakfr_WkoLN0T1fe4fFTiNZO89Q1JdaCdzbgqgu-jSOm0yujfizHP6-i_8uoHLYCAoAamu9zGNNQ3-BfbaFT_Rz29WBs9nA2JGFQA6vdBgyhgGlSndzPyEgzbW2ii-A440DTmUCDJkDoo1PL_u_BctUYL3z9WRKvxVWfktmj83DibbLZIwSudEzDPNcVHiFXNrzxhG82YWbyJilntOQ1gzJ3aYqHHRGg"
                alt="Profile"
                boxSize={{ base: 7, md: 8 }}
                borderRadius="full"
                objectFit="cover"
              />

              <Flex direction="column" textAlign="left">
                <Text fontSize="xs" color="gray.500" textTransform="uppercase">
                  Account
                </Text>

                <Text fontSize="sm" fontWeight="semibold" color="gray.800">
                  Hi, Alex
                </Text>
              </Flex>
            </HStack>

            {/* Wishlist */}
            <Box
              position="relative"
              cursor="pointer"
              p={1}
              color="gray.600"
              _hover={{ color: "#08164B" }}
            >
              <FiHeart size={24} />

              <Flex
                position="absolute"
                top="-4px"
                right="-4px"
                bg="orange.400"
                color="white"
                fontSize="10px"
                fontWeight="bold"
                boxSize={5}
                borderRadius="full"
                align="center"
                justify="center"
              >
                4
              </Flex>
            </Box>

            {/* Cart */}
            <HStack
              gap={2}
              bg="gray.50"
              _hover={{ bg: "gray.100" }}
              borderRadius="lg"
              px={{ base: 2, md: 3, lg: 4 }}
              py={2}
              cursor="pointer"
            >
              <Box position="relative">
                <FiShoppingBag size={24} color="#08164B" />

                <Flex
                  position="absolute"
                  top="-8px"
                  right="-8px"
                  bg="orange.400"
                  color="white"
                  fontSize="10px"
                  fontWeight="bold"
                  boxSize={5}
                  borderRadius="full"
                  align="center"
                  justify="center"
                >
                  3
                </Flex>
              </Box>

              <Flex
                direction="column"
                textAlign="left"
                display={{ base: "none", md: "flex" }}
              >
                <Text fontSize="xs" color="gray.500" textTransform="uppercase">
                  Cart
                </Text>

                <Text fontSize="sm" fontWeight="bold" color="#08164B">
                  $148.50
                </Text>
              </Flex>
            </HStack>
          </HStack>
        </Flex>
      </Box>

      {/* BOTTOM NAV */}
      <Box bg="white" boxShadow="0 1px 4px rgba(0,0,0,0.03)">
        <Flex
          maxW="1280px"
          mx="auto"
          minH="48px"
          align="center"
          justify="space-between"
          px={{ base: 4, md: 6, lg: 2 }}
          py={2}
          gap={4}
        >
          {/* Left */}
          <HStack gap={{ base: 2, md: 6 }} w={{ base: "100%", lg: "auto" }}>
            {/* Departments */}
            <Button
              bg="#08164B"
              color="white"
              _hover={{ bg: "#122468" }}
              size="sm"
              borderRadius="md"
              fontWeight="semibold"
              flexShrink={0}
            >
              <FiMenu size={20} />

              <Text display={{ base: "none", sm: "block" }}>
                All Departments
              </Text>

              <FiChevronDown size={16} />
            </Button>

            {/* Nav Links */}
            <HStack
              gap={{ md: 2, lg: 4 }}
              overflow="hidden"
              display={{ base: "none", md: "flex" }}
            >
              {NAV_LINKS.map((link) => (
                <Text
                  key={link.path}
                  as="a"
                  href="#"
                  px={2}
                  py={1}
                  fontSize={{ md: "xs", lg: "sm" }}
                  whiteSpace="nowrap"
                  fontWeight={activePath === link.path ? "bold" : "medium"}
                  color={activePath === link.path ? "gray.900" : "gray.600"}
                  bg={activePath === link.path ? "gray.100" : "transparent"}
                  borderRadius="md"
                  _hover={{ color: "gray.900" }}
                  transition="color 0.2s"
                >
                  {link.label}
                </Text>
              ))}
            </HStack>
          </HStack>

          {/* Shipping Note */}
          <Text
            fontSize="sm"
            color="gray.500"
            whiteSpace="nowrap"
            display={{ base: "none", lg: "block" }}
          >
            Free express shipping on orders over $75
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default NavBar;
