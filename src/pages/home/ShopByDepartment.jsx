import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  VStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import {
  MdOutlineCheckroom,
  MdOutlineDevices,
  MdOutlineWeekend,
  MdOutlineEco,
  MdOutlineOpenInFull,
  MdOutlineRestaurant,
  MdArrowForward,
} from "react-icons/md";

const DEPARTMENTS = [
  {
    label: "Fashion & Apparel",
    count: "12,480+ Items",
    icon: MdOutlineCheckroom,
  },
  {
    label: "Electronics & Audio",
    count: "8,520+ Items",
    icon: MdOutlineDevices,
  },
  { label: "Home & Living", count: "15,190+ Items", icon: MdOutlineWeekend },
  { label: "Beauty & Wellness", count: "6,240+ Items", icon: MdOutlineEco },
  {
    label: "Sports & Outdoors",
    count: "4,890+ Items",
    icon: MdOutlineOpenInFull,
  },
  {
    label: "Gourmet & Pantry",
    count: "3,120+ Items",
    icon: MdOutlineRestaurant,
  },
];

function DepartmentCard({ dept }) {
  return (
    <Box
      bg="#e9edfb"
      borderRadius="12px"
      p={5}
      cursor="pointer"
      transition="background 0.2s ease"
      _hover={{ bg: "#dde3f8" }}
    >
      <VStack align="center" gap={3}>
        <Flex
          w="40px"
          h="40px"
          borderRadius="full"
          bg="white"
          align="center"
          justify="center"
          color="#061449"
        >
          <Icon asChild boxSize="20px">
            <dept.icon />
          </Icon>
        </Flex>

        <VStack align="center" gap="2px" textAlign="center">
          <Text fontSize="14px" fontWeight="700" color="#061449">
            {dept.label}
          </Text>
          <Text fontSize="12px" color="#6b7089">
            {dept.count}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}

function ShopByDepartment() {
  return (
    <Box w="100%" bg="white" px={{ base: 4, lg: 8 }} py={8}>
      <Box maxW="1440px" mx="auto">
        <Flex justify="space-between" align="center" mb={5} wrap="wrap" gap={2}>
          <VStack align="flex-start" gap="2px">
            <Text
              fontSize="12px"
              fontWeight="700"
              color="#ab3500"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Catalog Index
            </Text>
            <Text fontSize="22px" fontWeight="800" color="#061449">
              Shop by Department
            </Text>
          </VStack>

          <Flex
            as="a"
            href="#"
            align="center"
            gap={1}
            color="#1e2a5e"
            fontSize="14px"
            fontWeight="600"
            _hover={{ color: "#ab3500" }}
          >
            <Text>All 32 Categories</Text>
            <Icon asChild boxSize="16px">
              <MdArrowForward />
            </Icon>
          </Flex>
        </Flex>

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={3}
        >
          {DEPARTMENTS.map((dept, i) => (
            <GridItem key={i}>
              <DepartmentCard dept={dept} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ShopByDepartment;
