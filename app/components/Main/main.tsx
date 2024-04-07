'use client';
import { Box, Flex } from '@chakra-ui/react'
// import React from 'react'
import Intro from './Intro';
import Features from './Features';
import HowItWorks from './How It works';

const Main = () => {
  return (
    <Flex width='100%' justify='center' flexDirection='column'>
      <Intro />
      <Features />
      <HowItWorks />
    </Flex>
  )
}

export default Main