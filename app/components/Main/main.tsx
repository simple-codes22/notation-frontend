'use client';
import { Box, Flex } from '@chakra-ui/react'
// import React from 'react'
import Intro from './Intro';
import Features from './Features';
import Track_ from './Track';
import Community from './Community';

const Main = () => {
  return (
    <Flex width='100%' justify='center' flexDirection='column'>
      <Intro />
      <Features />
      <Track_ />
      <Community />
    </Flex>
  )
}

export default Main