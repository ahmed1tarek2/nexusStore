import React from "react";
import { Box, Flex, Text, HStack, Icon } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

function TopNave() {
  return (
    <Box
      bg="mainColor"
      w="100%"
      h={{ base: "36px", sm: "40px" }}
      px={{ base: 3, sm: 4, md: 6 }}
    >
      <Flex
        h="100%"
        align="center"
        justify="space-between"
        maxW="1280px"
        px={{ base: 3, sm: 4, md: 3 }}  
        mx="auto"
        gap={3}
      >
        {/* Left side: support phone number */}
        <Text
          color="white"
          fontSize={{ base: "xs", sm: "sm" }}
          whiteSpace="nowrap"
        >
          <Text
            as="span"
            display={{ base: "none", sm: "inline" }}
          >
            Call 24/7 Support:{" "}
          </Text>

          <Text as="span" fontWeight="bold">
            +1 (800) 849-6398
          </Text>
        </Text>

        {/* Right side */}
        <HStack
          gap={{ base: 2, sm: 4 }}
          fontSize={{ base: "xs", sm: "sm" }}
          flexShrink={0}
        >
          {/* Order Tracking */}
          <Text
            as="a"
            href="#"
            color="white"
            display={{ base: "none", md: "block" }}
            _hover={{ color: "gray.300" }}
            cursor="pointer"
            whiteSpace="nowrap"
          >
            Order Tracking
          </Text>

          {/* Help Center */}
          <Text
            as="a"
            href="#"
            color="white"
            display={{ base: "none", sm: "block" }}
            _hover={{ color: "gray.300" }}
            cursor="pointer"
            whiteSpace="nowrap"
          >
            Help Center
          </Text>

          {/* Language / Currency */}
          <HStack
            gap={1}
            color="white"
            cursor="pointer"
            _hover={{ color: "gray.300" }}
            whiteSpace="nowrap"
          >
            <Text>EN / USD $</Text>
            <Icon as={IoChevronDown} boxSize={{ base: 3, sm: 4 }} />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}

export default TopNave;