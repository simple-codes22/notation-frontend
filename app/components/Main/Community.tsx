import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react';
// import { FaXTwi}

const Community = () => {
  return (
    <Flex as='section' width='100%' justify='center' align='center' py='100px' background="#2d2d2d" color="#e8ecf0">
        <Box width='100%' px="10px" maxW='1280px' my='50px'>
            <Box>
              <Text fontSize='50px' fontWeight={700} textAlign='center' mb='50px'>Celebrate Your Achievements</Text>
            </Box>
            <Box>
              <Text fontSize={{base: '20px', md:'30px'}}>Join our community of learners and educators to share your progress, ask questions, and engage with others who are passionate about math. Celebrate your achievements and inspire others to reach their full potential.</Text>
            </Box>
        </Box>
    </Flex>
  )
}

export default Community