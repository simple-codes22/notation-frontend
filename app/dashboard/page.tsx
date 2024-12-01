"use client"
import React from 'react'
import { Box, Image, Avatar, Wrap, WrapItem, Button, Card, CardHeader, CardBody, Text } from '@chakra-ui/react'
import { FaTrophy, FaBrain, FaCheck, FaBookOpen,  } from 'react-icons/fa6'
import { LuBrainCircuit } from 'react-icons/lu'
import img from '@/assets/Images/PNG/Notation normal tp.png'
import { Chart, CategoryScale, LinearScale, BarElement, } from 'chart.js'
import { Bar } from 'react-chartjs-2'

const Page = () => {
  Chart.register(CategoryScale, LinearScale, BarElement)
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
            {/* Add a daily streak info */}
          </Box>
          {/* For the top section and navigation */}
        </Box>




        <Box display='flex' flexDir='column' w='100%'>
          <Box>
            Welcome back, John Doe
          </Box>
          <Box>
            Ready to conquer some math challenges? Let&apos;s see how far you&apos;ve come!
          </Box>
          <Box>
            <Button>Start a New Quiz</Button>
          </Box>
        </Box>



        <Box w='100%' display='grid' gridGap='4' gridTemplateColumns={{md: "repeat(2, minmax(0, 1fr));"}}>
          {/* For the main stats card */}
          <Card>
                    <CardHeader display='flex' justifyContent='space-between' alignItems='center' pb='.5rem' >
                      <Box fontSize='14px' lineHeight='20px' fontWeight='500'>Total Quizzes Completed</Box>
                      <FaCheck height='16px' width='16px'  className="text-muted-foreground" />
                    </CardHeader>
                    <CardBody>
                      <Box fontSize='24px' lineHeight='32px' fontWeight='700'>248</Box>
                      <Box fontSize="12px" lineHeight="16px">+20% from last month</Box>
                    </CardBody>
          </Card>
          <Card>
                    <CardHeader display='flex' justifyContent='space-between' alignItems='center' pb='.5rem' >
                      <Box fontSize='14px' lineHeight='20px' fontWeight='500'>Average Score</Box>
                      <FaTrophy height='16px' width='16px'  className="text-muted-foreground" />
                    </CardHeader>
                    <CardBody>
                      <Box fontSize='24px' lineHeight='32px' fontWeight='700'>89%</Box>
                      <Box fontSize="12px" lineHeight="16px">+5% from last month</Box>
                    </CardBody>
          </Card>
          <Card>
                    <CardHeader display='flex' justifyContent='space-between' alignItems='center' pb='.5rem' >
                      <Box fontSize='14px' lineHeight='20px' fontWeight='500'>Concepts Mastered</Box>
                      <LuBrainCircuit height='16px' width='16px'  className="text-muted-foreground" />
                    </CardHeader>
                    <CardBody>
                      <Box fontSize='24px' lineHeight='32px' fontWeight='700'>32</Box>
                      <Box fontSize="12px" lineHeight="16px">+3 new this week</Box>
                </CardBody>
          </Card>
            <Card>
              <CardHeader display='flex' justifyContent='space-between' alignItems='center' pb='.5rem' >
                <Box fontSize='14px' lineHeight='20px' fontWeight='500'>Study Streak</Box>
                <FaBookOpen height='16px' width='16px'  className="text-muted-foreground" />
              </CardHeader>
              <CardBody>
                <Box fontSize='24px' lineHeight='32px' fontWeight='700'>7 Days</Box>
                <Box fontSize="12px" lineHeight="16px">Keep it up!</Box>
              </CardBody>
            </Card>
        </Box>




        <Box w='100%'>
          {/* For the progress and chart */}
          <Box>Your Progress</Box>

          <Box>
            <Bar data={{
              labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
              datasets: [
                {
                  label: 'Average Score',
                  data: [80, 85, 90, 95],
                }
              ]
            }} />
          </Box>
        </Box>




        <Box w='100%'>
          {/* Next challenge section */}
          <Box>
            <Text>Next Level</Text>
            <Text>Level Up</Text>
          </Box>
          <Box>
            {/* New random unaanswered question */}
            <Box>If 2x + 3 = 11, what is the value of x?</Box>
            <Button>Solve Now</Button>
          </Box>
        </Box>



        <Box w='100%'>
          {/* Create new questions */}
          <Box>
            <Text>Want to create your own questions?</Text>
            <Button>Get started now!</Button>

          </Box>
        </Box>



        <Box>
          {/* Overall Progress */}
        </Box>



      </Box>
    </Box>
  )
}

export default Page
