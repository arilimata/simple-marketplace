import React from "react";
import ItemCarousel from "./ui/itemCarousel";
import { Box, Container, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import { widthPropDefs } from "@radix-ui/themes/props";
import { px } from "motion";

export default function MainContent() {
  const linkCaraousel = [
    "/maincontent1.jpg",
    "/maincontent2.jpg",
    "/maincontent3.jpg",
    // "https://picsum.photos/1366/600",
    // "https://picsum.photos/1366/600",
  ];
  return (
    <Container align={"center"} size={"4"} className="my-8">
      <Box>
        <Text size={"7"}>Check out this new product</Text>
      </Box>
      <Flex>
        <ItemCarousel links={linkCaraousel} width={1135} height={300} />
      </Flex>
      <Flex className="mt-4" direction={"column"}>
        <Text size={"6"}>Or search by category</Text>
        <Flex direction={"column"} gap={"3"} pt={"4"} width={"auto"}>
          <Flex>
            <Box className="relative w-9/12 h-[250px] rounded-2xl mask-r-to-black bg-[url('/outfit-2024.jpg')] bg-size-[100%] bg-center">
              {/* <Box className="absolute inset-0 z-1 rounded-2xl bg-gradient-to-r from-transparent via-black/60 to-black/90" /> */}
              <Box className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/80 to-black/10"></Box>
              <Box className="relative top-3/5 float-end right-6 max-w-sm text-white text-right">
                <Text as="div" size={"7"} className="pb-1.5">
                  2024 Collection
                </Text>
                <Text size={"3"} className="text-white/60">
                  Check out our collection for 2024, featuring the latest trends
                  and styles.
                </Text>
              </Box>
              {/* <Image
                src="/outfit-2024.jpg"
                alt="Main Content 1"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              /> */}
            </Box>
            <Box className="ml-2 w-3/12 rounded-2xl mask-r-to-black bg-[url('/outfit-2024.jpg')] bg-size-[150%] bg-center">
              <Box className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/80 to-black/10"></Box>
              <Text
                align={"center"}
                as="div"
                size={"3"}
                className="relative text-white max-w-3xs text-center place-self-center top-1/3"
              >
                Check out our collection for 2024, featuring the latest trends
                and styles.
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box className="w-1/5 h-[250px] mask-t-to-black rounded-2xl bg-[url('/tops.jpg')] bg-size-[100%] bg-center">
              <Box className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black"></Box>
              <Text
                align={"center"}
                as="div"
                size={"3"}
                className="relative text-white max-w-3xs text-center place-self-center top-1/3"
              >
                Browse our collection of tops, featuring the latest styles and trends.
              </Text>
            </Box>
            <Box className="">Box 2</Box>
            <Box className="">Box 3</Box>
            <Box className="">Box 4</Box>
            <Box className="">Box 5</Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
