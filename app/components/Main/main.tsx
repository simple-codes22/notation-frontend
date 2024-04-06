'use client';
import { Box, Flex } from '@chakra-ui/react'
// import React from 'react'
import Intro from './Intro';
import Features from './Features';
import Benefits from './Benefits';

const Main = () => {
  return (
    <Flex width='100%' justify='center' flexDirection='column'>
      <Intro />
      <Features />
      <Benefits />
    </Flex>
  )
}

export default Main