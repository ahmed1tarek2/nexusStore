import React from "react";
import {
  Box,
  Flex,
  Grid,
  VStack,
  HStack,
  Text,
  Heading,
  Link,
  Image,
  Input,
  Button,
  Badge,
  Icon,
} from "@chakra-ui/react";
import {
  MdCall,
  MdMail,
  MdLocationOn,
  MdPublic,
  MdAlternateEmail,
  MdShare,
  MdPodcasts,
  MdForum,
} from "react-icons/md";

const LOGO_SRC = "assets/screen.png";

/* -----------------------------------------------------------------------
 * DATA
 * ---------------------------------------------------------------------*/
const QUICK_LINKS = [
  "About Us",
  "Careers",
  "Press & Media",
  "Sustainability",
  "Affiliate Program",
];
const CUSTOMER_SERVICE = [
  "Help & FAQs",
  "Order Tracking",
  "Shipping & Delivery",
  "Returns & Refunds",
  "Contact Support",
];
const POLICIES = [
  "Privacy Policy",
  "Terms of Service",
  "Security & Compliance",
  "Cookie Settings",
  "Merchant Standards",
];
const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY", "GPAY"];
const SOCIAL_ICONS = [MdPublic, MdAlternateEmail, MdShare, MdPodcasts, MdForum];

/* -----------------------------------------------------------------------
 * SMALL HELPERS
 * ---------------------------------------------------------------------*/
function FooterLinkColumn({ title, links }) {
  return (
    <VStack align="stretch" spacing={3}>
      <Text
        fontWeight="bold"
        color="#061449"
        fontSize="13px"
        letterSpacing="wide"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <VStack as="ul" align="stretch" spacing={2} listStyleType="none">
        {links.map((l) => (
          <Box as="li" key={l}>
            <Link
              href="#"
              fontSize="14px"
              color="#45464f"
              _hover={{ color: "#061449" }}
            >
              {l}
            </Link>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
}

function BrandLockup() {
  return (
    <HStack spacing={2} paddingBottom={2}>
      <Image
        src={LOGO_SRC}
        alt="NexusMart Logo"
        h="40px"
        w="auto"
        objectFit="contain"
      />
      <Heading size="sm" color="#061449" letterSpacing="tight">
        NexusMart
      </Heading>
    </HStack>
  );
}

/* -----------------------------------------------------------------------
 * FOOTER
 * ---------------------------------------------------------------------*/
function NexusMartFooter() {
  return (
    <Box as="footer" w="100%" bg="primaryContainer" color="primaryText" mt={16}>
      <Grid
        w="100%"
        maxW="1440px"
        mx="auto"
        px={{ base: 6, lg: 8 }}
        py={16}
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "1.4fr 1fr 1fr 1fr 1.2fr",
        }}
        gap={10}
      >
        {/* Company info */}

        <VStack align="stretch" gap={4}>
          <BrandLockup />

          <Text fontSize="14px" color="#45464f">
            Your premier destination for verified multi-category discovery,
            institutional trust, and global delivery logistics.
          </Text>

          <VStack align="stretch" gap={2} fontSize="14px" color="textColor">
            <HStack gap={2}>
              <Icon as={MdCall} color="primaryText" boxSize="18px" />
              <Text>+1 (800) 849-6398</Text>
            </HStack>

            <HStack gap={2}>
              <Icon as={MdMail} color="primaryText" boxSize="18px" />
              <Text>support@nexusmart.com</Text>
            </HStack>

            <HStack gap={2} align="flex-start">
              <Icon as={MdLocationOn} color="primaryText" boxSize="18px" mt="2px" />

              <Text>100 Commerce Blvd, Suite 400, New York, NY</Text>
            </HStack>
          </VStack>
        </VStack>

        <FooterLinkColumn title="Quick Links" links={QUICK_LINKS} />

        <FooterLinkColumn title="Customer Service" links={CUSTOMER_SERVICE} />

        <FooterLinkColumn title="Policies" links={POLICIES} />

        <VStack align="stretch" gap={4}>
          <Text
            fontWeight="bold"
            color="primaryText"
            fontSize="13px"
            letterSpacing="wide"
            textTransform="uppercase"
          >
            Stay Connected
          </Text>

          <Text fontSize="14px" color="textColor">
            Subscribe to our newsletter for curated product highlights and
            member-only promotions.
          </Text>

          <HStack gap={2}>
            <Input
              bg="#fff"
              placeholder="Your email address"
              fontSize="14px"
              border="none"
              _placeholder={{ color: "textColor" }}
            />

            <Button
              bg="secColor"
              color="white"
              fontWeight="600"
              flexShrink={0}
              _hover={{ bg: "hoversecColor" }}
            >
              Join
            </Button>
          </HStack>

          <HStack gap={3} color="textColor">
            {SOCIAL_ICONS.map((IconCmp, i) => (
              <Flex
                key={i}
                as="button"
                w="36px"
                h="36px"
                borderRadius="full"
                bg="#fff"
                align="center"
                justify="center"
                _hover={{ color: "primaryText" }}
              >
                <Icon as={IconCmp} boxSize="18px" />
              </Flex>
            ))}
          </HStack>

          <Flex wrap="wrap" gap={2} pt={1}>
            {PAYMENTS.map((p) => (
              <Badge
                key={p}
                bg="#fff"
                color="textColor"
                fontWeight="bold"
                fontSize="10px"
                px={2}
                py={1}
                borderRadius="base"
              >
                {p}
              </Badge>
            ))}
          </Flex>
        </VStack>
      </Grid>

      {/* Bottom bar */}

      <Box bg="#dce9ff" py={3}>
        <Flex
          maxW="1440px"
          mx="auto"
          px={{ base: 6, lg: 8 }}
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-between"
          gap={2}
          fontSize="14px"
          color="textColor"
        >
          <Text>© 2025 NexusMart Global Inc. All rights reserved.</Text>

          <HStack gap={6}>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Security</Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default NexusMartFooter;
