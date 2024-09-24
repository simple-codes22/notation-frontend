import React from 'react'
import { Box, Image, Avatar, Wrap, WrapItem, Button } from '@chakra-ui/react'
import img from '@/assets/Images/PNG/Notation normal tp.png'

const Page = () => {
  return (
    <Box background="rgb(232, 236, 240)" minH='100vh' color="#2d2d2d" w='100%' display='flex' justifyContent='center'>
      <Box w='100%' maxWidth='1280px' display='flex' flexDir='column' alignItems='center'>
        <Box w='100%' my='20px'>
          <Box display='flex' justifyContent='space-between'>
            <Image src={img.src} alt='Notation' width='180px' />

            <Box>
              {/* User Data (will be clickable to show a tool tip containing settings and the likes) */}
              <Avatar name='John Doe' size='sm' />
            </Box>
          </Box>
          {/* For the top section and navigation */}
        </Box>




        <Box display='flex' flexDir='column' w='100%'>
          <Box>
            Welcome back, John Doe
          </Box>
          <Box>
            Ready to conquer some math challenges? Let's see how far you've come!
          </Box>
          <Box>
            <Button>Start a New Quiz</Button>
          </Box>
        </Box>



        <Box>
          {/* For the main stats card */}
          
        </Box>
        <Box>
          {/* For the progress and chart */}
        </Box>
        <Box>
          {/* Next challenge section */}
        </Box>
        <Box>
          {/* Create new questions */}
        </Box>
        <Box>
          {/* Overall Progress */}
        </Box>
      </Box>
    </Box>
  )
}

export default Page