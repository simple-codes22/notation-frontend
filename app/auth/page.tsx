'use client';
import { Box, Flex, Input, Text, InputGroup, InputLeftElement, Button, Divider, AbsoluteCenter } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react';
import Illustration from './../../assets/Images/Illustrations/Auth Illustration.jpg';
import { FaLock, FaUser } from 'react-icons/fa6';

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

      <Box width='50%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Box display='flex' width='100%' flexDir='column' justifyContent='center' alignItems='center'>
          <Text fontSize='24px' fontWeight='600'>Welcome!</Text>
          <Text letterSpacing='1.2px'>Sign In To Your Account</Text>
          <Box width='50%'>

          <InputGroup width='100%' display='flex' justifyContent='center' alignItems='center' my='20px'>
            <InputLeftElement pointerEvents='none' display='flex' justifyContent='center' alignItems='center'>
              <FaUser fill='#00000063' />
            </InputLeftElement>
            <Input type='text' placeholder='Username'  variant='flushed' />
          </InputGroup>
            
          <InputGroup width='100%' display='flex' justifyContent='center' alignItems='center' my='20px'>
              <InputLeftElement pointerEvents='none' display='flex' justifyContent='center' alignItems='center'>
                <FaLock fill='#00000063' />
              </InputLeftElement>
              <Input placeholder='Password' type='password' variant='flushed' />
            </InputGroup>
          </Box>
        </Box>

        <Box my='20px'>
          <Button>Sign In</Button>
        </Box>

        <Box position='relative' padding='10'>
          <Divider />
          <AbsoluteCenter px='4'>
            Content
          </AbsoluteCenter>
        </Box>
      </Box>
    </Flex>
  )
}

export default Page