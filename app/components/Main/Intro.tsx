import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react';
import Background from '../../../assets/Images/Illustrations/Intro.png';
import Image from 'next/image';

const Intro = () => {
  return (
    <Flex width='100%' justify='center'>
        <Box width='100%' maxWidth='1280px' px="10px" display='flex' alignItems={{base: 'center', md: 'center'}} flexDirection={{base:'column', md: 'row'}} pt='60px' pb='150px' minH='720px'>
            {/* <Image src={Background} alt='Background' layout='fill' objectFit='cover' objectPosition='center'/> */}
            <Box width={{base:"100%", md:'60%'}} display='flex' flexDirection='column' justifyContent='center'>
                <Text fontSize={{base: '40px', md:'60px'}} fontWeight={700}>
                    Elevate Your Math Mastery: Dive Into Our Dynamic Quiz Universe
                </Text>
                <Text mt='50px' fontSize='20px'>
                    Empower your math journey with interactive quizzes! Embark on a thrilling adventure of learning where every question leads you to mastery.
                </Text>
            </Box>
            <Box width={{base: '60%', md:'40%'}} display={{base: 'none', md:'flex'}} justifyContent='center' alignItems='center'>
                <Image src={Background} alt="Math Illustration" />
            </Box>
        </Box>
    </Flex>
  )
}

export default Intro