'use client';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Link } from '@chakra-ui/next-js';
import React from 'react'
import mainLogo from '@/assets/Images/PNG/Notation normal tp.png';

const Footer = () => {
  return (
    <Box width='100%' py='50px' display='flex' justifyContent='center' alignItems='center'>
      <Box width='100%' maxW='1280px'>
        <Box>
          <Box>
            <Box width='200px'>
              <Image src={mainLogo} alt='logo' />
            </Box>
          </Box>
          <Box>
            <Box>
              <Text>Quick Links</Text>
              <Box>
                <Link href=''>Home</Link>
                <Link href=''>About</Link>
                <Link href=''>Features</Link>
                <Link href=''>Track</Link>
                <Link href=''>Community</Link>
                <Link href=''>Testimonial</Link>
              </Box>
            </Box>
            <Box>
              <Text>Resources</Text>
              <Box>
                <Link href=''>Blog</Link>
                <Link href=''>FAQ</Link>
                <Link href=''>Support</Link>
                <Link href=''>Privacy Policy</Link>
                <Link href=''>Terms of Service</Link>
              </Box>
            </Box>
            <Box>
              <Text>Connect</Text>
              <Box>
                <Link href=''>Twitter</Link>
                <Link href=''>Facebook</Link>
                <Link href=''>Instagram</Link>
                <Link href=''>LinkedIn</Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  )
}

export default Footer