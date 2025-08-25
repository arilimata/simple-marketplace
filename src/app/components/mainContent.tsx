import React from "react";
import ItemCarousel from "./ui/itemCarousel";
import { Box, Container, Flex, Grid, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import { widthPropDefs } from "@radix-ui/themes/props";
import { px } from "motion";
import SmallCard from "./ui/smallCard";
import ItemCard from "./ui/itemCard";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export default function MainContent() {
  const linkCaraousel = [
    "/maincontent1.jpg",
    "/maincontent2.jpg",
    "/maincontent3.jpg",
    // "https://picsum.photos/1366/600",
    // "https://picsum.photos/1366/600",
  ];
  return (
    <Container align={"center"} size={"4"} className="my-4">
      <Box>
        <Text size={"7"}>Check out this new product</Text>
      </Box>
      <Flex pt={"2"}>
        <ItemCarousel links={linkCaraousel} width={1135} height={300} />
      </Flex>
      <Flex className="mt-4" direction={"column"}>
        <Text size={"6"}>Or search by category</Text>
        <Flex direction={"column"} gap={"3"} pt={"4"} width={"auto"}>
          <Flex gap={"2"} align={"center"} justify={"center"}>
            <SmallCard image={"/categories/tops.jpg"} description={"Tops"}/>
            <SmallCard image={"/categories/bottoms.jpg"} description={"Bottoms"}/>
            <SmallCard image={"/categories/dresses.jpg"} size={160} description={"Dress"}/>
            <SmallCard image={"/categories/accessories.jpg"} description={"Accessories"}/>
            <SmallCard image={"/categories/shoes.jpg"} description={"Shoes"}/>
          </Flex>
          <Flex gap={"2"}>
            <Box className="w-1/2 h-[250px] mask-l-to-black rounded-2xl bg-[url('/male-clothes.jpg')] bg-cover bg-center">
              <Box className="absolute inset-0 bg-gradient-to-l from-black/100 via-black/90 to-black/0"></Box>
              <Box className="relative top-3/5 float-end right-6 max-w-sm text-white text-right">
                <Text as="div" size={"7"}>Men</Text>
                <Text size={"3"}>Men</Text>
              </Box>
            </Box>
            <Box className="w-1/2 h-[250px] mask-r-to-black rounded-2xl bg-[url('/women-clothes.jpg')] bg-cover bg-center">
              <Box className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/90 to-black/0"></Box>
              <Box className="relative top-3/5 left-6 max-w-sm text-white">
                <Text as="div" size={"7"}>Women</Text>
                <Text size={"3"}>Women</Text>
              </Box>
            </Box>
          </Flex>
          <Flex gap={"2"}>
            <Box
              className={`relative w-9/12 h-[250px] rounded-2xl mask-r-to-black bg-[url('/outfit-2024.jpg')] bg-size-[100%] bg-center`}
            >
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
            </Box>
            <Box
              className={`w-3/12 rounded-2xl mask-r-to-black bg-[url('/outfit-2024.jpg')] bg-size-[150%] bg-center`}
            >
              <Box className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/80 to-black/10"></Box>
              <Box className="relative text-white max-w-3xs text-center place-self-center top-1/3">
                <Image
                  src={"/icon/arrow.svg"}
                  width={10}
                  height={10}
                  alt=""
                  className="rotate-90 w-[862px] h-[30px]"
                />
                <Text align={"center"} as="div" size={"3"} className="">
                  Check out our collection for 2024, featuring the latest trends
                  and styles.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex pt={"4"} direction={"column"} gap={"2"}>
        <Text as="div" size={"6"} >Browse all items</Text>
        {/* <Grid columns={"5"} gap={"3"}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </Grid> */}
      </Flex>
    </Container>
  );
}
