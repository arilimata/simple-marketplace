import { Box, Flex, Text } from "@radix-ui/themes";

type props = {
    link?: String;
    image?: String;
    title?: String;
    size?: Number;
    description?: String;
}

const SmallCard: React.FC<props> = ({ link, title, image, size, description }) => {
  return (
    <Box
      className="w-1/5 h-[250px] mask-t-to-black rounded-2xl bg-size-[100%] bg-center"
      style={{
        backgroundImage: image ? `url(${image})` : "none", // Dynamically set the background image
        backgroundSize: size ? `${size}%` : "100%",
      }}
    >
      <Box className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black"></Box>
      <Text
        align={"center"}
        as="div"
        size={"3"}
        className="relative text-white max-w-3xs top-2/5"
      >
        {description}
      </Text>
    </Box>
  );
};

export default SmallCard;
