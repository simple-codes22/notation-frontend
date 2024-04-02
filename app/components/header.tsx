'use client';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Logo from  '@/assets/Images/Favicon-dark.svg';

const Header = () => {
  return (
    <Flex>
        <Box>
            <Image src={Logo} alt="Notation" />
        </Box>
    </Flex>
  )
}

export default Header