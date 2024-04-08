"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Features = () => {
  const mainFeatures = [
    [
      {
        title: "Interactive Quizzes",
        desc_:
          "Engage in dynamic quizzes that make learning math enjoyable and effective. Our interactive platform offers a variety of question formats, ensuring an engaging experience for learners of all levels.",
      },
      {
        title: "Customization Options",
        desc_:
          "Tailor your quiz experience to suit your learning preferences. Choose from a range of topics and difficulty levels, allowing you to focus on specific areas or challenge yourself with comprehensive assessments.",
      },
    ],
    [
      {
        title: "Real-Time Feedback",
        desc_:
          "Receive instant feedback on your quiz results, helping you identify strengths and areas for improvement. Our detailed analytics and insights empower you to track your progress and stay motivated on your math journey.",
      },
    ],
    [
      {
        title: "Comprehensive Question Bank",
        desc_:
          "Explore a vast library of math topics, from basic arithmetic to advanced calculus. Our extensive question bank ensures that you have access to a wide range of exercises to enhance your skills and knowledge.",
      },
      {
        title: "Accessible Anywhere, Anytime",
        desc_:
        "Access our exam suite from any device with an internet connection, allowing you to study math whenever and wherever it's convenient for you. Whether you're at home, in school, or on the go, our platform is accessible 24/7.",
      },
    ],
    // {
    //   title: "Progress Tracking",
    //   desc_:
    //     "Monitor your progress over time and visualize your improvement with our intuitive progress tracking tools. Stay informed about your performance and celebrate your achievements as you work towards mastering math concepts.",
    // },
    // {
    //   title: "Engaging Learning Environment",
    //   desc_:
    //     "Immerse yourself in an interactive learning environment that fosters curiosity and exploration. Our platform is designed to make math learning fun and exciting, encouraging you to embrace challenges  and unlock your full potential.",
    // },
  ];

  
  return (
    <Flex width='100%' justify='center' flexDirection='column' align='center'>
        <Box as='section' width='100%' maxW='1280px' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Text fontSize='50px' fontWeight={700} textAlign='center' mt='50px'>Our Amazing Features</Text>
          <Box display='flex' flexDirection='column'>
            {mainFeatures.map((elem, index) => {
              if (elem.length == 1) {
                return (
                  <Box key={`${index}0`}>
                    <Box width='100%' my='20px' p='40px'>
                      <Text py='20px' fontSize='30px' fontWeight='700'>
                          {elem[0].title}
                      </Text>
                      <Text py='20px' fontSize='20px' letterSpacing='1px'>
                          {elem[0].desc_}
                      </Text>
                    </Box>
                  </Box>
                )
              } else if(elem.length == 2) {
                return (
                  <Box key={`${index}0`} display='flex'>
                    <Box width='50%' my='20px' p='40px'>
                      <Text py='20px' fontSize='30px' fontWeight='700'>
                          {elem[0].title}
                      </Text>
                      <Text py='20px' fontSize='20px' letterSpacing='1px'>
                          {elem[0].desc_}
                      </Text>
                    </Box>
                    <Box width='50%' my='20px' p='40px'>
                      <Text py='20px' fontSize='30px' fontWeight='700'>
                          {elem[1].title}
                      </Text>
                      <Text py='20px' fontSize='20px' letterSpacing='1px'>
                          {elem[1].desc_}
                      </Text>
                    </Box>
                  </Box>
                )
              }
            })}
          </Box>
        </Box>
    </Flex>
  );
};

export default Features;
