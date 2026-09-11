import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  VStack,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

function LargeHub() {
  return (
    <Box
      position="relative"
      h="100%"
      minH="480px"
      borderRadius="14px"
      overflow="hidden"
      cursor="pointer"
    >
      <Image
        src="https://images.unsplash.com/photo-1483721310020-03333e577078?w=900&q=80"
        alt="Spring Apparel & Urban Runners"
        w="100%"
        h="100%"
        objectFit="cover"
        position="absolute"
        inset={0}
      />
      <Box
        w="100%"
        h="100%"
        position="absolute"
        inset="0"
        background="linear-gradient(to top, rgba(6, 20, 73, 0.95), rgba(6, 20, 73, 0.2), transparent)"
      />    

      <VStack
        align="flex-start"
        gap={3}
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={7}
      >
        <Box
          bg="hoversecColor"
          color="white"
          fontSize="11px"
          fontWeight="700"
          letterSpacing="wide"
          textTransform="uppercase"
          px={2}
          py="4px"
          borderRadius="4px"
        >
          Editor's Selection
        </Box>

        <Text fontSize="26px" fontWeight="800" color="white" lineHeight="1.2">
          Spring Apparel & Urban Runners
        </Text>

        <Text fontSize="14px" color="#dde1ff" maxW="360px">
          Lightweight performance silhouettes, waterproof shells, and breathable
          knitwear.
        </Text>

        <Flex
          as="a"
          href="#"
          align="center"
          gap={2}
          bg="white"
          color="mainColor"
          fontWeight="700"
          fontSize="14px"
          px={5}
          py={3}
          borderRadius="8px"
          _hover={{ bg: "#e7e9f3" }}
        >
          <Text>Explore Collection</Text>
          <Icon asChild boxSize="16px">
            <FaArrowRight />
          </Icon>
        </Flex>
      </VStack>
    </Box>
  );
}

function MediumHub() {
  return (
    <Box
      position="relative"
      h="100%"
      minH="480px"
      borderRadius="14px"
      overflow="hidden"
      cursor="pointer"
    >
      <Image
        src="/assets/FeaturedCategorymid.png"
        alt="Minimalist Workspaces"
        w="100%"
        h="100%"
        objectFit="cover"
        position="absolute"
        inset={0}
      />

      <Box
        w="100%"
        h="100%"
        position="absolute"
        inset="0"
        background="linear-gradient(to top, rgba(6, 20, 73, 0.95), rgba(6, 20, 73, 0.2), transparent)"
      />

      <VStack
        align="flex-start"
        gap={2}
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={6}
      >
        <Text
          fontSize="11px"
          fontWeight="700"
          letterSpacing="wide"
          textTransform="uppercase"
          color="#ffb59d"
        >
          Tech Living
        </Text>

        <Text fontSize="20px" fontWeight="800" color="white" lineHeight="1.2">
          Minimalist Workspaces
        </Text>

        <Text fontSize="13px" color="#dde1ff">
          Desk accessories, fast docks & wireless charging.
        </Text>

        <Flex
          as="a"
          href="#"
          align="center"
          gap={1}
          color="white"
          fontWeight="700"
          fontSize="14px"
          pt={1}
          _hover={{ color: "#ffb59d" }}
        >
          <Text>Browse 450+ Tools</Text>
          <Icon asChild boxSize="16px">
            <FaArrowRight />
          </Icon>
        </Flex>
      </VStack>
    </Box>
  );
}

function SmallHub({ img, tag, title }) {
  return (
    <Box
      position="relative"
      h="100%"
      minH="220px"
      borderRadius="14px"
      overflow="hidden"
      cursor="pointer"
    >
      <Image
        src={img}
        alt={title}
        w="100%"
        h="100%"
        objectFit="cover"
        position="absolute"
        inset={0}
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
        top={4}
        right={4}
        w="36px"
        h="36px"
        borderRadius="full"
        bg="whiteAlpha.300"
        backdropFilter="blur(4px)"
        align="center"
        justify="center"
        color="white"
      >
        <Icon asChild boxSize="16px">
          <FaArrowRight style={{ transform: "rotate(-45deg)" }} />
        </Icon>
      </Flex>

      <VStack
        align="flex-start"
        gap={1}
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={5}
      >
        <Text
          fontSize="11px"
          fontWeight="700"
          letterSpacing="wide"
          textTransform="uppercase"
          color="#ffb59d"
        >
          {tag}
        </Text>
        <Text fontSize="17px" fontWeight="800" color="white">
          {title}
        </Text>
      </VStack>
    </Box>
  );
}

function FeaturedCategoryHubs() {
  return (
    <Box w="100%" bg="white" px={{ base: 4, lg: 8 }} py={10}>
      <Box maxW="1440px" mx="auto">
        <Flex
          justify="space-between"
          align="flex-start"
          mb={6}
          wrap="wrap"
          gap={4}
        >
          <VStack align="flex-start" gap="2px">
            <Text
              fontSize="12px"
              fontWeight="700"
              color="hoversecColor"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Curated Hubs
            </Text>
            <Text fontSize="24px" fontWeight="800" color="mainColor">
              Featured Category Hubs
            </Text>
          </VStack>

          <Text
            fontSize="14px"
            color="hoversecColor"
            textAlign={{ base: "left", md: "right" }}
            maxW="420px"
          >
            Handpicked seasonal lookbooks and device ecosystems, tested and
            certified for seamless delivery.
          </Text>
        </Flex>

        <Grid templateColumns={{ base: "1fr", lg: "1.4fr 1fr 0.9fr" }} gap={4}>
          <GridItem>
            <LargeHub />
          </GridItem>

          <GridItem>
            <MediumHub />
          </GridItem>

          <GridItem>
            <Grid templateRows="1fr 1fr" gap={4} h="100%">
              <SmallHub
                img="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=80"
                tag="Clean Beauty"
                title="Organic Skincare Labs"
              />
              <SmallHub
                img="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&q=80"
                tag="Kitchen & Brew"
                title="Artisanal Coffee & Tea"
              />
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default FeaturedCategoryHubs;
