import React from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import {
  MdVerifiedUser,
  MdLocalShipping,
  MdEco,
  MdCurrencyExchange,
} from "react-icons/md";

const RIGHT_ITEMS = [
  {
    icon: MdLocalShipping,
    color: "mainColor",
    label: "Fast Door-to-Door Worldwide Air Freight",
  },
  {
    icon: MdEco,
    color: "mainColor",
    label: "Carbon-Neutral Packaging Standard",
  },
  {
    icon: MdCurrencyExchange,
    color: "mainColor",
    label: "30-Day Hassle-Free Returns",
  },
];

export function TrustBar() {
  return (
    <Box w="100%" bg="primaryContainer" py={2} mt={2}>
      <Flex
        maxW="1440px"
        mx="auto"
        px={{ base: 4, lg: 8 }}
        align="center"
        justify="space-between"
        wrap="wrap"
        gap={3}
        fontSize="12px"
        fontWeight="600"
        color="textColor"
      >
        <HStack gap={2}>
          <Icon asChild boxSize="16px" color="secColor">
            <MdVerifiedUser />
          </Icon>
          <Text>Buyer Protection Guarantee on All Global Shipments</Text>
        </HStack>

        <HStack gap={8} wrap="wrap">
          {RIGHT_ITEMS.map((item) => (
            <HStack key={item.label} gap={1}>
              <Icon asChild boxSize="16px" color={item.color}>
                <item.icon />
              </Icon>
              <Text>{item.label}</Text>
            </HStack>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}


