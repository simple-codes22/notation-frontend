'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Link } from '@chakra-ui/next-js';
import React from 'react'
import mainLogo from '@/assets/Images/PNG/Notation normal tp.png';
import { FaXTwitter, FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <Box width='100%' py='100px' display='flex' justifyContent='center' alignItems='center'>
      <Box width='100%' maxW='1280px'>
        <Box display='flex' justifyContent='space-between' alignItems='center'>

          <Box>
            <Box width='200px'>
              <Image src={mainLogo} alt='logo' />
            </Box>
          </Box>

          <Flex justify='space-between'>
            <Box mx='35px'>
              <Text pb='10px' fontWeight='700' fontSize='20px'>For Educators</Text>
              <Box display='flex' flexDirection='column'>
                <Link href='' my='3px' fontSize='14px'>Notation Learn</Link>
                <Link href='' my='3px' fontSize='14px'>Create Tutorials</Link>
                <Link href='' my='3px' fontSize='14px'>Become a Quiz Master</Link>
              </Box>
            </Box>
            <Box mx='35px'>
              <Text pb='10px' fontWeight='700' fontSize='20px'>For Companies</Text>
              <Box display='flex' flexDirection='column'>
                <Link href='' my='3px' fontSize='14px'>Partnerships</Link>
                {/* <Link href='' my='3px' fontSize='14px'>FAQ</Link>
                <Link href='' my='3px' fontSize='14px'>Support</Link>
                <Link href='' my='3px' fontSize='14px'>Privacy Policy</Link>
                <Link href='' my='3px' fontSize='14px'>Terms of Service</Link> */}
              </Box>
            </Box>
            {/* <Box mx='35px'>
              <Text pb='10px'>Connect</Text>
              <Box display='flex' flexDirection='column'>
                <Link href='' my='3px' fontSize='14px'>Twitter</Link>
                <Link href='' my='3px' fontSize='14px'>Facebook</Link>
                <Link href='' my='3px' fontSize='14px'>Instagram</Link>
                <Link href='' my='3px' fontSize='14px'>LinkedIn</Link>
              </Box>
            </Box> */}
          </Flex>
        </Box>
        <Box display='flex' justifyContent='space-between' pt='100px'>
          <Box fontSize='15px'>
            &copy; {(new Date()).getUTCFullYear()} Notation. All rights reserved.
          </Box>
          <Box display='flex'>
            <Link href="" mx='5px'><FaXTwitter size='28px' /></Link>
            <Link href="" mx='5px'><FaLinkedin size='28px' /></Link>
            <Link href="" mx='5px'><FaFacebook size='28px' /></Link>
            <Link href="" mx='5px'><FaGithub size='28px' /></Link>
            <Link href="" mx='5px'><FaDiscord size='28px' /></Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer