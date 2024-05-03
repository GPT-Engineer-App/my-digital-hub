import { Box, Text, Link } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" p={4} bg="gray.200" textAlign="center">
      <Text fontSize="sm">
        © 2024 John Doe. All rights reserved.
      </Text>
      <Link href="https://github.com/johndoe" isExternal>
        <Text fontSize="sm" mt={2}>
          <FaGithub /> View on GitHub
        </Text>
      </Link>
    </Box>
  );
};

export default Footer;