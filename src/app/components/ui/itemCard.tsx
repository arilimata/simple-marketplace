import { Card, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

const ItemCard = () => {
  return (
    <Card className="h-[330px]">
      <Flex direction={"column"} className="p-4" gap={"1"}>
        <Image
          src="/categories/tops.jpg"
          width={100}
          height={100}
          alt=""
          className="self-center w-[156px] h-[156px] object-cover rounded-sm"
        ></Image>
        <Text size={"5"}>Item Title</Text>
        <Text size={"3"}>lorem ipsum dolor sit amet</Text>
        <Text size={"2"} weight={"bold"} align={"right"} className="">120.99$</Text>
      </Flex>
    </Card>
  );
};

export default ItemCard;
