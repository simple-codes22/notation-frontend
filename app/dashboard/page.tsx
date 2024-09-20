import React from 'react'
import { Box } from '@chakra-ui/react'

const Page = () => {
  return (
    <Box background="rgb(232, 236, 240)" minH='100vh' color="#2d2d2d" w='100%' display='flex' justifyContent='center'>
      <Box w='100%' maxWidth='1280px' display='flex' flexDir='column' alignItems='center'>
        Test text
      </Box>
    </Box>
  )
}

export default Page