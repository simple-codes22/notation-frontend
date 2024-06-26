'use client';
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Track_ = () => {
  return (
    <Flex as="section" width='100%' justify='center' align='center' py='100px'>
      <Box width='100%' px="10px" maxW='1280px' display='flex' flexDirection='column' my='50px'>
         <Box textAlign='center'>
          <Text fontSize='50px' fontWeight={700} textAlign='center' mb='50px'>Track Your Progress</Text>
         </Box>
         <Box>
          <Text fontSize={{base: '20px', md: '30px'}} >Monitor your progress over time and visualize your improvement with our intuitive progress tracking tools. Stay informed about your performance and celebrate your achievements as you work towards mastering math concepts.</Text>
         </Box>
      </Box>
    </Flex>
  )
}

export default Track_