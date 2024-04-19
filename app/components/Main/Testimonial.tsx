import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Testimonial = () => {
  const testimony = [
    {
      userName: '',
      review: 'This edutech quiz product revolutionized my classroom, making learning interactive and assessment effortless'
    },
    {
      userName: '',
      review: 'The engaging quizzes kept my students hooked during remote learning, transforming virtual lessons into dynamic experiences.'
    },
    {
      userName: '',
      review: 'Studying became a breeze with this edutech quiz tool, boosting my grades and confidence.'
    },
    {
      userName: '',
      review: 'Simple yet effective, this quiz product became my go-to study companion with its mobile-friendly interface.'
    },
    {
      userName: '',
      review: "My child's enthusiasm for learning skyrocketed thanks to this edutech quiz platform, making studying enjoyable and rewarding."
    },
    {
      userName: '',
      review: "Streamlining our corporate training, this quiz platform enhanced employee engagement and performance."
    },
    {
      userName: '',
      review: 'Comprehensive and customizable, this quiz product is a must-have for educators seeking effective assessment tools.'
    },
  ]
  return (
    <Flex as='section' width='100%' justify='center' align='center' py='100px'>
        <Box width='100%' maxW='1280px'>
            <Box><Text textAlign='center' fontSize='50px' fontWeight={700} mt='50px'>Testimonial</Text></Box>
            <Box></Box>
        </Box>
    </Flex>
  )
}

export default Testimonial