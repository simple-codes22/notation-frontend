import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react';
import Background from '../../../assets/Images/Illustrations/Intro illustration.png';
import Image from 'next/image';

const Intro = () => {
  return (
    <Flex width='100%' justify='center'>
        <Box width='100%' maxWidth='1280px' display='flex' flexDirection={{base:'column', md: 'row'}} minH='720px'>
            {/* <Image src={Background} alt='Background' layout='fill' objectFit='cover' objectPosition='center'/> */}
            <Box width={{base:"100%", md:'60%'}} display='flex' flexDirection='column' justifyContent='center'>
                <Text fontSize='60px' fontWeight={700}>
                    Elevate Your Math Mastery: Dive Into Our Dynamic Quiz Universe
                </Text>
                <Text mt='20px' fontSize='20px'>
                    Empower your math journey with interactive quizzes! Embark on a thrilling adventure of learning where every question leads you to mastery.
                </Text>
            </Box>
            <Box width={{base: '100%', md:'40%'}} display='flex' justifyContent='center' alignItems='center'>
                <Image src={Background} alt="Math Illustration" />
            </Box>
        </Box>
    </Flex>
  )
}

export default Intro