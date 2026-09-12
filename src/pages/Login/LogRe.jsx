import {
  Box,
  Flex,
  Grid,
  GridItem,
  VStack,
  HStack,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  MdOutlineLocalShipping,
  MdOutlineVerifiedUser,
  MdBolt,
  MdStar,
} from "react-icons/md";
import Login from "./Login";
import Register from "./Register";
function LoginPanel() {
  return (
    <Box
      position="relative"
      h="100%"
      minH="500px"
      borderRadius="16px"
      overflow="hidden"
      bg="#061449"
    >
      <Image
        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&q=80"
        alt="Global Member Club"
        w="100%"
        h="100%"
        objectFit="cover"
        position="absolute"
        inset={0}
      />
      <Box
        position="absolute"
        inset={0}
        background="linear-gradient(to top, rgba(6,20,73,0.96), rgba(6,20,73,0.55) 55%, rgba(6,20,73,0.25))"
      />
      {/* Top badges */}
      <Flex
        position="absolute"
        top={5}
        left={5}
        right={5}
        justify="space-between"
        align="center"
      >
        <HStack
          bg="whiteAlpha.200"
          backdropFilter="blur(6px)"
          px={3}
          py="6px"
          borderRadius="full"
          gap={1}
        >
          <Text
            fontSize="11px"
            fontWeight="700"
            color="white"
            letterSpacing="wide"
          >
            GLOBAL MEMBER CLUB
          </Text>
        </HStack>
        <HStack gap={1} color="white">
          <Icon asChild boxSize="14px" color="#ffd166">
            <MdStar />
          </Icon>
          <Text fontSize="13px" fontWeight="700">
            4.9 / 5.0
          </Text>
        </HStack>
      </Flex>
      {/* Bottom content */}
      <VStack
        align="flex-start"
        gap={4}
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={6}
      >
        <Text
          fontSize="11px"
          fontWeight="700"
          color="#ffb59d"
          letterSpacing="wide"
          textTransform="uppercase"
        >
          Verified Marketplace
        </Text>
        <Text fontSize="24px" fontWeight="800" color="white" lineHeight="1.25">
          Join over 2.4M savvy shoppers worldwide.
        </Text>
        <Text fontSize="13px" color="#dde1ff" maxW="360px">
          Unlock curated daily deals, guaranteed authentic electronics, elevated
          fashion staples, and high-velocity express fulfillment.
        </Text>
        <VStack align="stretch" gap="10px" w="100%" pt={1}>
          <HStack
            bg="whiteAlpha.100"
            backdropFilter="blur(6px)"
            borderRadius="10px"
            p={3}
            gap={3}
          >
            <Flex
              w="32px"
              h="32px"
              borderRadius="8px"
              bg="#ab3500"
              align="center"
              justify="center"
              color="white"
            >
              <Icon asChild boxSize="16px">
                <MdOutlineLocalShipping />
              </Icon>
            </Flex>
            <VStack align="flex-start" gap="0">
              <Text fontSize="13px" fontWeight="700" color="white">
                Free Express Shipping
              </Text>
              <Text fontSize="11px" color="#c3c7ea">
                On qualified multi-category orders over $75
              </Text>
            </VStack>
          </HStack>
          <HStack
            bg="whiteAlpha.100"
            backdropFilter="blur(6px)"
            borderRadius="10px"
            p={3}
            gap={3}
          >
            <Flex
              w="32px"
              h="32px"
              borderRadius="8px"
              bg="whiteAlpha.300"
              align="center"
              justify="center"
              color="white"
            >
              <Icon asChild boxSize="16px">
                <MdOutlineVerifiedUser />
              </Icon>
            </Flex>
            <VStack align="flex-start" gap="0">
              <Text fontSize="13px" fontWeight="700" color="white">
                Institutional 30-Day Guarantee
              </Text>
              <Text fontSize="11px" color="#c3c7ea">
                Zero-friction returns & authentic verification
              </Text>
            </VStack>
          </HStack>
          <HStack
            bg="whiteAlpha.100"
            backdropFilter="blur(6px)"
            borderRadius="10px"
            p={3}
            gap={3}
          >
            <Flex
              w="32px"
              h="32px"
              borderRadius="8px"
              bg="whiteAlpha.300"
              align="center"
              justify="center"
              color="white"
            >
              <Icon asChild boxSize="16px">
                <MdBolt />
              </Icon>
            </Flex>
            <VStack align="flex-start" gap="0">
              <Text fontSize="13px" fontWeight="700" color="white">
                Member-Only Flash Drops
              </Text>
              <Text fontSize="11px" color="#c3c7ea">
                Up to 65% off top-tier international brands
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <HStack gap={2} pt={1}>
          <HStack gap="-8px">
            <Flex
              w="26px"
              h="26px"
              borderRadius="full"
              bg="#ab3500"
              border="2px solid #061449"
              align="center"
              justify="center"
              color="white"
              fontSize="10px"
              fontWeight="700"
            >
              EL
            </Flex>
            <Flex
              w="26px"
              h="26px"
              borderRadius="full"
              bg="#fe6a34"
              border="2px solid #061449"
              align="center"
              justify="center"
              color="white"
              fontSize="10px"
              fontWeight="700"
              ml="-8px"
            >
              MR
            </Flex>
            <Flex
              w="26px"
              h="26px"
              borderRadius="full"
              bg="#5dcaa5"
              border="2px solid #061449"
              align="center"
              justify="center"
              color="white"
              fontSize="10px"
              fontWeight="700"
              ml="-8px"
            >
              SK
            </Flex>
          </HStack>
          <Text fontSize="12px" color="#dde1ff" fontStyle="italic">
            "The quickest checkout & premier customer care in modern retail."
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
function AuthForm() {
  const [tab, setTab] = useState("login");
  return (
    <Box
      h="100%"
      minH="500px"
      p={{ base: 6, md: 10 }}
      display="flex"
      flexDirection="column"
    >
      <Flex justify="space-between" align="center" mb={6}>
        <Image src="/assets/screen.png" alt="NexusMart Logo" h="32px" />
        <HStack gap={1} color="#63a37c">
          <Box w="6px" h="6px" borderRadius="full" bg="#63a37c" />
          <Text
            fontSize="11px"
            fontWeight="700"
            color="#63a37c"
            letterSpacing="wide"
          >
            SECURE GATEWAY
          </Text>
        </HStack>
      </Flex>
      {tab === "login" && (
        <Text fontSize="24px" fontWeight="800" color="#061449" mb={2}>
          Welcome to NexusMart
        </Text>
      )}
      {tab === "signup" && (
        <Text fontSize="24px" fontWeight="800" color="#061449" mb={2}>
          Create Your Account
        </Text>
      )}
      <Text fontSize="14px" color="#6b7089" mb={6}>
        Access your orders, personalized recommendations, and member perks.
      </Text>
      {/* Tabs */}
      <HStack bg="#eef1fb" borderRadius="10px" p="4px" mb={6}>
        <Box
          flex="1"
          textAlign="center"
          py={2}
          borderRadius="8px"
          fontSize="14px"
          fontWeight="700"
          cursor="pointer"
          bg={tab === "login" ? "white" : "transparent"}
          color={tab === "login" ? "#061449" : "#6b7089"}
          boxShadow={tab === "login" ? "sm" : "none"}
          onClick={() => setTab("login")}
        >
          Log In
        </Box>
        <Box
          flex="1"
          textAlign="center"
          py={2}
          borderRadius="8px"
          fontSize="14px"
          fontWeight="700"
          cursor="pointer"
          bg={tab === "signup" ? "white" : "transparent"}
          color={tab === "signup" ? "#061449" : "#6b7089"}
          boxShadow={tab === "signup" ? "sm" : "none"}
          onClick={() => setTab("signup")}
        >
          Sign Up
        </Box>
      </HStack>
      {tab === "login" && <Login />}
      {tab === "signup" && <Register />}
    </Box>
  );
}
function LogRe() {
  return (
    <Flex w="100%" justify="center" bg="#f4f5fb" px={4} py={10}>
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        maxW="1000px"
        w="100%"
        bg="white"
        borderRadius="20px"
        boxShadow="lg"
        overflow="hidden"
        p={3}
        gap={0}
      >
        <GridItem display={{ base: "none", lg: "block" }}>
          <LoginPanel />
        </GridItem>
        <GridItem>
          <AuthForm />
        </GridItem>
      </Grid>
    </Flex>
  );
}
export default LogRe;
