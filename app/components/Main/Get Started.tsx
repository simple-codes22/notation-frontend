'use client';
import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { UserContext } from '@/app/context/UserContext';
import { useContext } from 'react';

const GetStarted = () => {
  const userMain = useContext(UserContext)

  return (
    <Flex justify='center' align='center' width='100%' py='100px' background='#2d2d2d' color="#e8ecf0">
        <Box width='100%' maxW='1280px' px="10px">
            <Box display='flex' flexDir='column' justifyContent='center' alignItems='center'>
                <Text fontSize={{base:'30px', md:'50px'}} mb='20px' textAlign='center'>
                    Ready to get started? Sign up now and take your first step towards mastering math!
                </Text>
                {userMain ? userMain.user ?
                  
                  <Button my='20px' as={Link} py='30px' px='30px' fontSize='20px' href='/auth' variant='solid' background="#e8ecf0" color="#2d2d2d" _hover={{background: '#e8ecf0e6', textDecor: 'none'}}>Let&apos;s Go🚀🚀</Button>
                  : 
                  <Button my='20px' as={Link} py='30px' px='30px' fontSize='20px' href='/dashboard' variant='solid' background="#e8ecf0" color="#2d2d2d" _hover={{background: '#e8ecf0e6', textDecor: 'none'}}>Let&apos;s Go🚀🚀</Button>
                  :
                  <Button my='20px' as={Link} py='30px' px='30px' fontSize='20px' href='/auth' variant='solid' background="#e8ecf0" color="#2d2d2d" _hover={{background: '#e8ecf0e6', textDecor: 'none'}}>Let&apos;s Go🚀🚀</Button>
                }
            </Box>
        </Box>
    </Flex>
  )
}

export default GetStarted