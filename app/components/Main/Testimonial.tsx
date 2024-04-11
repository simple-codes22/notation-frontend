import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Testimonial = () => {
  return (
    <Flex as='section' width='100%' justify='center' align='center'>
        <Box width='100%' maxW='1280px'>
            <Box><Text textAlign='center' fontSize='50px' fontWeight={700} mt='50px'>Testimonial</Text></Box>
            <Box></Box>
        </Box>
    </Flex>
  )
}

export default Testimonial