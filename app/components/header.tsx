'use client';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import Image from 'next/image';
import React from 'react';
import Logo from  '@/assets/Images/PNG/Notation normal tp.png';

const Header = () => {
  return (
    <Flex py='20px' width='100%' justify='center' align='center'>
        <Box px='20px' width='100%' maxWidth='1280px' display='flex' alignItems='center' justifyContent='space-between'>
          <Box width='150px'>
            <Image src={Logo}  alt="Notation" />
          </Box>

          <Box display={{base: 'none', md:'flex'}} alignItems='center'>
            <Box px='20px' display='flex' justifyContent='center' alignItems='center'>
              <Link href="" pr='15px' _hover={{textDecoration:'none'}}>Home</Link>
              <Link href="" pr='15px' _hover={{textDecoration:'none'}}>About Us</Link>
              <Link href="" pr='15px' _hover={{textDecoration:'none'}}>Pricing</Link>
            </Box>
          </Box>
          <Box display={{base: 'none', md:'flex'}} alignItems='center'>
            <Box>
              <Link href="/auth"><Button variant='solid' background="#383838" color='white' _hover={{background: '#2d2d2de2'}} >Sign In</Button></Link>
            </Box>
          </Box>
        </Box>
    </Flex>
  )
}

export default Header