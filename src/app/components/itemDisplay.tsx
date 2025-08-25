import {
  Box,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  Grid,
  Text,
  TextField,
} from "@radix-ui/themes";
import ItemCard from "./ui/itemCard";
import Image from "next/image";

const ItemDisplay = () => {
  return (
    <Flex className="">
      <Flex className="w-[380.5px]">
        <Flex>
          
        </Flex>
        <Box className="">
          <Flex gap={"3"} align={"center"} mx={"4"}>
            <TextField.Root
              placeholder="Search Item..."
              size={"3"}
              className="w-auto flex-grow"
            >
              <TextField.Slot>
                <Image src={"/icon/search.svg"} width={16} height={16} alt="" />
              </TextField.Slot>
            </TextField.Root>
            <Button size={"3"} color="gray">
              Search
            </Button>
          </Flex>

          {/* Categories */}
          <Flex direction="column" gap={"2"} align={"start"} m={"4"}>
            Categories
            <CheckboxGroup.Root name="categories" size={"3"}>
              <CheckboxGroup.Item value="1">Tops</CheckboxGroup.Item>
              <CheckboxGroup.Item value="2">Bottoms</CheckboxGroup.Item>
              <CheckboxGroup.Item value="3">Dresses</CheckboxGroup.Item>
              <CheckboxGroup.Item value="4">Accessories</CheckboxGroup.Item>
              <CheckboxGroup.Item value="5">Shoes</CheckboxGroup.Item>
            </CheckboxGroup.Root>
          </Flex>
          <Text m={"4"} as="div">Price Range</Text>
          <Flex m={"4"} gap={"2"}>
            <TextField.Root placeholder="Min Range" className="w-[7.7rem]"></TextField.Root>
            <Flex as="span"><Image src={"/icon/dash.svg"} width={16} height={16} alt="" /></Flex>
            <TextField.Root placeholder="Max Range" className="w-[7.7rem]"></TextField.Root>
            <Button size={"2"} color="gray">Submit</Button>
          </Flex>
        </Box>
      </Flex>

      <Grid columns={"5"} gap={"3"} className="w-[1136px]">
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
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </Grid>
    </Flex>
  );
};

export default ItemDisplay;
