'use client';
import { Box, Flex, Input, Text, InputGroup, InputLeftElement, Button, Divider, AbsoluteCenter } from '@chakra-ui/react'
// import Image from 'next/image';
import React from 'react';
import Illustration from './../../assets/Images/Illustrations/Auth.jpg';
import { FaLock, FaUser, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
import { Link } from '@chakra-ui/next-js';

const Page = () => {
  // console.log(Illustration)
  return (
    <Flex justify='center' align='center' width='100%' minH='100vh'>
      <Box width={{ base: '100%', md: '50%'}} position={{base: 'absolute', md: 'static'}} zIndex='-1' display='flex' justifyContent='center' alignItems='center' minH='100vh' sx={{
        background: `url('${Illustration.src}')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}>
      </Box>

      <Box width={{base: '70%',md: '50%'}}  background='white' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Box display='flex' width='100%' flexDir='column' justifyContent='center' alignItems='center'>
          <Text fontSize='30px' fontWeight='600'>Welcome!</Text>
          <Text letterSpacing='1.2px' my='10px' textAlign='center'>Sign In To Your Account</Text>
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

        <Box position='relative' width='70%' padding='10'>
          <Divider color='black' background='#000' />
          <AbsoluteCenter background='white' px='4'>
            Or
          </AbsoluteCenter>
        </Box>

        <Box display="flex" width='40%' justifyContent='space-evenly'>
          <Link href=""><FcGoogle size='40px' /></Link>
          <Link href=""><FaGithub size='40px' /></Link>
          <Link href=""><FaXTwitter size='40px' /></Link>
        </Box>
      </Box>
    </Flex>
  )
}

export default Page