import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Intro = () => {
  return (
    <Flex width='100%' justify='center'>
        <Box width='100%' maxWidth='1280px' display='flex' minH='720px'>
            <Box width='60%'>
                <Text>
                    Elevate Your Math Mastery: Dive Into Our Dynamic Quiz Universe
                </Text>
                <Text>
                    Empower your math journey with interactive quizzes! Embark on a thrilling adventure of learning where every question leads you to mastery.
                </Text>
            </Box>
            <Box></Box>
        </Box>
    </Flex>
  )
}

export default Intro