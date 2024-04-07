'use client';
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react';
import Illustration from './../../assets/Images/Illustrations/Auth Illustration.jpg';

const Page = () => {
  return (
    <Flex justify='center' align='center' width='100%'>
      <Box width='50%' display='flex' justifyContent='center' alignItems='center' height='100%'>
        <Image src={Illustration} alt="Authentication" />
      </Box>
      <Box width='50%' display='flex' justifyContent='center' alignItems='center'>
        Page
      </Box>
    </Flex>
  )
}

export default Page