import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react';
import Background from '../../../assets/Images/Illustrations/Intro.png';
import Image from 'next/image';
import { Player } from '@lottiefiles/react-lottie-player';
import intro from './../../../assets/Lottie/Math intro.json';

const Intro = () => {
  return (
    <Flex width='100%' justify='center'>
        <Box width='100%' maxWidth='1280px' px="10px" display='flex' alignItems={{base: 'center', md: 'center'}} flexDirection={{base:'column', md: 'row'}} pt='0px' pb='100px' minH='720px'>
            {/* <Image src={Background} alt='Background' layout='fill' objectFit='cover' objectPosition='center'/> */}
            <Box width={{base:"100%", md:'50%'}} display='flex' flexDirection='column' justifyContent='center'>
                <Text fontSize={{base: '40px', md:'60px'}} fontWeight={700}>
                    Elevate Your Math Mastery: Dive Into Our Dynamic Quiz Universe
                </Text>
                <Text mt='50px' fontSize='20px'>
                    Empower your math journey with interactive quizzes! Embark on a thrilling adventure of learning where every question leads you to mastery.
                </Text>
            </Box>
            <Box width={{base: '60%', md:'50%'}} display={{base: 'none', md:'flex'}} justifyContent='center' alignItems='center'>
                {/* <Image src={Background} alt="Math Illustration" />
                 */}
                 <Player src={intro} loop autoplay></Player>
            </Box>
        </Box>
    </Flex>
  )
}

export default Intro