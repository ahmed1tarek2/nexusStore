import React from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Countdown from "react-countdown";

const IconBolt = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function TimeBox({ value }) {
  return (
    <Flex
      w="34px"
      h="30px"
      align="center"
      justify="center"
      bg="#061449"
      color="white"
      borderRadius="6px"
      fontSize="15px"
      fontWeight="700"
    >
      {String(value).padStart(2, "0")}
    </Flex>
  );
}

function FlashDealsBar() {
  // وقت الانتهاء: بعد 4 ساعات و38 دقيقة و22 ثانية من دلوقتي
  const endTime =
    Date.now() + (4 * 60 * 60 + 38 * 60 + 22) * 1000;

  return (
    <Box w="100%" px={{ base: 4, lg: 8 }} py={5} bg="#f4f5fb">
      <Flex
        maxW="1440px"
        mx="auto"
        bg="white"
        borderRadius="14px"
        boxShadow="sm"
        px={5}
        py={3}
        align="center"
        justify="space-between"
        wrap="wrap"
        gap={4}
      >
        <HStack gap={4}>
          <HStack
            bg="#ab3500"
            color="white"
            px={4}
            py={2}
            borderRadius="10px"
            gap={2}
            fontWeight="800"
            fontSize="14px"
            letterSpacing="wide"
          >
            <IconBolt width="16px" height="16px" />
            <Text>FLASH DEALS</Text>
          </HStack>

          <HStack gap={2}>
            <Text fontSize="14px" color="#3a3f55" fontWeight="500">
              Ending In:
            </Text>

            <Countdown
              date={endTime}
              renderer={({ hours, minutes, seconds }) => (
                <HStack gap={1}>
                  <TimeBox value={hours} />
                  <Text fontWeight="700" color="#061449">
                    :
                  </Text>
                  <TimeBox value={minutes} />
                  <Text fontWeight="700" color="#061449">
                    :
                  </Text>
                  <TimeBox value={seconds} />
                </HStack>
              )}
            />

            <Text fontSize="11px" fontWeight="700" color="#6b7089" letterSpacing="wide">
              UTC TIME
            </Text>
          </HStack>
        </HStack>

        <HStack gap={6}>
          <Text fontSize="14px" color="#3a3f55" display={{ base: "none", md: "block" }}>
            Limited batch allocation. Guaranteed authentic stock.
          </Text>

          <HStack
            as="a"
            href="#"
            gap={1}
            color="#ab3500"
            fontWeight="700"
            fontSize="14px"
            _hover={{ color: "#fe6a34" }}
          >
            <Text>View All (84 Deals)</Text>
            <IconArrowRight width="16px" height="16px" />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}

export default FlashDealsBar;