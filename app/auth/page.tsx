'use client';
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react';
import Illustration from './../../assets/Images/Illustrations/Auth Illustration.jpg';

const Page = () => {
  // console.log(Illustration)
  return (
    <Flex justify='center' align='center' width='100%'>
      <Box width='50%' display='flex' justifyContent='center' alignItems='center' minH='100vh' sx={{
        background: `url('${Illustration.src}')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}>
      </Box>
      <Box width='50%' display='flex' justifyContent='center' alignItems='center'>
        Page
      </Box>
    </Flex>
  )
}

export default Page