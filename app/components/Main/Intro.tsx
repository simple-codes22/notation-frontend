import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react';
import Background from '../../../assets/Images/Illustrations/Intro.png';
import Image from 'next/image';
import { Player } from '@lottiefiles/react-lottie-player';
import intro from './../../../assets/Lottie/Math intro.json';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <Flex width='100%' justify='center'>
        <Box width='100%' maxWidth='1280px' px="10px" display='flex' alignItems={{base: 'center', md: 'center'}} flexDirection={{base:'column', md: 'row'}} pt={{base: '20px', md:'0px'}} pb={{base:'50px', md:'100px'}} minH={{base: '80vh', md:'550px'}}>
            {/* <Image src={Background} alt='Background' layout='fill' objectFit='cover' objectPosition='center'/> */}
            <Box as={motion.div} initial={{opacity: 0, x: -90}} animate={{opacity: 1, x: 0, transition: {type: "spring", damping: "13", mass: "1", stiffness: "44"}}} width={{base:"100%", md:'50%'}} display={{base: 'none', md: 'flex'}} minH={{base: '600px', md:'550px'}} flexDirection='column' justifyContent='center'>
                <Text fontSize={{base: '40px', md:'50px', lg: '60px'}} fontWeight={700}>
                    Elevate Your Math Mastery: Dive Into Our Dynamic Quiz Universe
                </Text>
                <Text mt='50px' fontSize='20px'>
                    Empower your math journey with interactive quizzes! Embark on a thrilling adventure of learning where every question leads you to mastery.
                </Text>
            </Box>

            {/* Mobile */}
            <Box width={{base:"100%", md:'50%'}} display={{base: 'flex', md: 'none'}} minH={{base: '80vh', md:'720px'}} flexDirection='column' justifyContent='center'>
                <Text fontSize={{base: '40px', md:'60px'}} fontWeight={700}>
                    Elevate Your Math Mastery: Dive Into Our Dynamic Quiz Universe
                </Text>
                <Text mt='50px' fontSize='20px'>
                    Empower your math journey with interactive quizzes! Embark on a thrilling adventure of learning where every question leads you to mastery.
                </Text>
            </Box>

            {/* Illustration */}
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