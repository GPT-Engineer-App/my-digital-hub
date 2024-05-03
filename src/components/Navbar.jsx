import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

function Navbar() {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Flex align="center" mr={5}>
        <Text fontSize="lg" fontWeight="bold">
          My Website
        </Text>
      </Flex>
      <Box display={{ sm: 'block', md: 'block' }} mt={{ base: 4, md: 0 }}>
        <Link href="/" display="flex" alignItems="center">
          <FaHome />
          <Text ml={2}>Home</Text>
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;