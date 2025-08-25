import Image from "next/image";
import React from "react";

// List of Components
import MainContent from "./components/mainContent";
import Navbar from "./components/navbar";
import ItemDisplay from "./components/itemDisplay";
import { Flex, Section, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <MainContent />
      </div>
      <div>
        <ItemDisplay />
      </div>
      <Section className="bg-gray-900">
        <Flex direction={"column"} align={"center"}>
          <Flex>
            <Text className="text-white">Created by arilimata with NextJS and RadixUI</Text>
          </Flex>
          <Flex>
            <Link href={"https://www.instagram.com/arilimata/"}>
              <Image
                src={"/icon/instagram.svg"}
                width={24}
                height={24}
                alt=""
              />
            </Link>
            <Link href={"https://github.com/arilimata"}>
              <Image
                src={"/icon/github.svg"}
                width={24}
                height={24}
                alt=""
              />
            </Link>  
          </Flex>
        </Flex>
      </Section>
    </div>
  );
}
