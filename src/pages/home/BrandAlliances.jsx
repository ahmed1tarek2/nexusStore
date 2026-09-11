import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const BRANDS = [
  { name: "SONY", style: { fontWeight: 800, letterSpacing: "0.02em" } },
  { name: "NIKE", style: { fontWeight: 800, fontStyle: "italic" } },
  { name: "SAMSUNG", style: { fontWeight: 600, letterSpacing: "0.05em" } },
  { name: "dyson", style: { fontWeight: 700, textTransform: "none" } },
  { name: "Apple", style: { fontWeight: 700 }, icon: "" },
  { name: "LG", style: { fontWeight: 800 } },
  { name: "BOSCH", style: { fontWeight: 800, letterSpacing: "0.02em" } },
];

function BrandAlliances() {
  return (
    <Box w="100%" bg="white" px={{ base: 4, lg: 8 }} py={2}>
      <Box maxW="1440px" mx="auto">
        <Text
          textAlign="center"
          fontSize="10px"
          fontWeight="700"
          letterSpacing="wide"
          textTransform="uppercase"
          color="#8a8d9f"
          mb={4}
        >
          Direct Manufacturer Alliances
        </Text>

        <Flex
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={6}
          color="#3a3f55"
        >
          {BRANDS.map((brand, i) => (
            <Flex
              key={i}
              align="center"
              px={4}
              gap={2}
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.05)" }}
            >
              {brand.icon && (
                <Text fontSize="18px">
                  {brand.icon}
                </Text>
              )}
              <Text fontSize="20px" {...brand.style} opacity={0.7}>
                {brand.name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default BrandAlliances;
