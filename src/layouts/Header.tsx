import { FC } from 'react';
import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const Header: FC = () => {
  return (
    <Box>
      <Flex justify="space-between" align="center">
        <Heading>OXYGEN</Heading>
        <Stack direction="row" spacing={3}>
          <Text>FAVORITE</Text>
          <Text>MY ACCOUNT</Text>
          <Text>CHECKOUT</Text>
          <Text>BLOG</Text>
          <Text>CART</Text>
        </Stack>
      </Flex>
      <Divider />
    </Box>
  );
};

export default Header;
