"use client";
import { motion, vw } from "motion/react";
import { Flex, TabNav, Text } from "@radix-ui/themes";
import { ClientRequest } from "http";
import Image from "next/image";

const Navbar = () => {
  return (
    <Flex justify={"between"} className="p-2">
      <Flex align={"center"} gap="4" width={"100vw"}>
        <Image src="/icon/market.svg" alt="MyMarketplace" width={40} height={40} />
        <h1>My Marketplace</h1>
      </Flex>

      <Flex justify={"center"} width={"100vw"}>
        <TabNav.Root justify={"center"} size={"2"}>
          <TabNav.Link active>Home</TabNav.Link>
          <TabNav.Link>Product</TabNav.Link>
          <TabNav.Link>About Us</TabNav.Link>
          <TabNav.Link>Career</TabNav.Link>
        </TabNav.Root>
      </Flex>

      <Flex justify={"end"} align={"center"} gap="2" width={"100vw"}>
        <Image src="/icon/profile.svg" alt="Profile" width={30} height={30}/>
        <Text>My Profile</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
