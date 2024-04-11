'use client';
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Track_ = () => {
  return (
    <Flex as="section" width='100%' justify='center' align='center'>
      <Box width='100%' maxW='1280px' display='flex' flexDirection='column'>
         <Box textAlign='center'>
          <Text fontSize='50px' fontWeight={700} textAlign='center' mt='50px'>Track Your Progress</Text>
         </Box>
         <Box>
          <Text>Monitor your progress over time and visualize your improvement with our intuitive progress tracking tools. Stay informed about your performance and celebrate your achievements as you work towards mastering math concepts.</Text>
         </Box>
      </Box>
    </Flex>
  )
}

export default Track_