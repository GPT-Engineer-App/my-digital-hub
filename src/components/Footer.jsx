import { Box, Text, Link, Flex } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" p={4} bg="gray.200" textAlign="center">
      <Text fontSize="sm">© 2024 John Doe. All rights reserved.</Text>
      <Flex gap="2" justify="center">
        <Link href="https://github.com/johndoe" isExternal>
          <Text fontSize="sm" mt={2}>
            <FaGithub /> GitHub
          </Text>
        </Link>
        <Link href="https://twitter.com/johndoe" isExternal>
          <Text fontSize="sm" mt={2}>
            <FaTwitter /> Twitter
          </Text>
        </Link>
        <Link href="https://instagram.com/johndoe" isExternal>
          <Text fontSize="sm" mt={2}>
            <FaInstagram /> Instagram
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
