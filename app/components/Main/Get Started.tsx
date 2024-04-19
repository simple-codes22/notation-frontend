'use client';
import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const GetStarted = () => {
  return (
    <Flex justify='center' align='center' width='100%' py='100px'>
        <Box width='100%' maxW='1280px'>
            <Box display='flex' flexDir='column' justifyContent='center' alignItems='center'>
                <Text fontSize='50px' textAlign='center'>
                    Ready to get started? Sign up now and take your first step towards mastering math!
                </Text>
                <Button my='20px' as={Link} py='30px' px='30px' fontSize='20px' href='/auth' variant='solid' background="#383838" color='white' _hover={{background: '#2d2d2de2', textDecor: 'none'}}>Let&apos;s Go🚀🚀</Button>
            </Box>
        </Box>
    </Flex>
  )
}

export default GetStarted