"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import brain from './../../../assets/Lottie/brain.json';
import books from './../../../assets/Lottie/Books.json';
import globe from './../../../assets/Lottie/globe 2.json';


const introStyle = {
  type: 'spring',
  damping: '13',
  mass: '1',
  stiffness: '44',
}

const Features = () => {
  const mainFeatures = [
    [
      {
        imageLottie: brain,
        title: "Interactive Quizzes",
        size: '',
        desc_:
          "Engage in dynamic quizzes that make learning math enjoyable and effective. Our interactive platform offers a variety of question formats, ensuring an engaging experience for learners of all levels.",
      },
      {
        imageLottie: "",
        title: "🔧 Customization Options",
        size: '',
        desc_:
          "Tailor your quiz experience to suit your learning preferences. Choose from a range of topics and difficulty levels, allowing you to focus on specific areas or challenge yourself with comprehensive assessments.",
      },
    ],
    [
      {
        imageLottie: "",
        title: "🔄 Real-Time Feedback",
        size: '',
        desc_:
          "Receive instant feedback on your quiz results, helping you identify strengths and areas for improvement. Our detailed analytics and insights empower you to track your progress and stay motivated on your math journey.",
      },
    ],
    [
      {
        imageLottie: books,
        title: "Comprehensive Question Bank",
        size: '120px',
        desc_:
          "Explore a vast library of math topics, from basic arithmetic to advanced calculus. Our extensive question bank ensures that you have access to a wide range of exercises to enhance your skills and knowledge.",
      },
      {
        imageLottie: globe,
        title: "Accessible Anywhere, Anytime",
        size: '150px',
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
    <Flex width='100%' justify='center' flexDirection='column' align='center' background="#2d2d2d" color="#e8ecf0" pb='100px'>
        <Box as='section' width='100%' px="10px" maxW='1280px' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Text as={motion.div} fontSize='50px' fontWeight={700} textAlign='center' mt='100px' mb='50px' viewport={{once: true}} initial={{opacity:0, y: 60}} whileInView={{opacity: 1, y: 0, transition: introStyle}}>Our Amazing Features</Text>
          <Box display='flex' flexDirection='column'>
            {mainFeatures.map((elem, index) => {
              if (elem.length == 1) {
                return (
                  <Box as={motion.div} key={`${index}0`} initial={{opacity:0, y: 60}} viewport={{once: true}} whileInView={{opacity: 1, y: 0, transition: introStyle}}>
                    <Box width='100%' my='20px' p='40px' background="#00000019" borderRadius='15px'>
                      <Box py='20px' fontSize='30px' fontWeight='700'>
                        <Box w={`${elem[0].size}`}>
                            <Player style={{marginRight: '10px'}} src={elem[0].imageLottie} loop autoplay></Player>
                        </Box>
                          {elem[0].title}
                      </Box>
                      <Text py='20px' fontSize='20px' letterSpacing='1px'>
                          {elem[0].desc_}
                      </Text>
                    </Box>
                  </Box>
                )
              } else if(elem.length == 2) {
                return (
                  <Box as={motion.div} key={`${index}0`} display='flex' flexDir={{base: 'column', md: 'row'}} initial={{opacity:0, y: 60}} viewport={{once: true}} whileInView={{ opacity: 1, y: 0, transition: introStyle}}>
                    <Box width={{base: '100%', md:'50%'}} my='20px' p='40px' background="#00000019" borderRadius='15px' mr='10px'>
                      <Box py='20px' fontSize='30px' fontWeight='700' display='flex' alignItems='center'>
                        <Box w={`${elem[0].size}`}>
                          <Player style={{marginRight: '10px'}} src={elem[0].imageLottie} loop autoplay></Player>
                        </Box>
                          {elem[0].title}
                      </Box>
                      <Text py='20px' fontSize='20px' letterSpacing='1px'>
                          {elem[0].desc_}
                      </Text>
                    </Box>
                    <Box as={motion.div} width={{base: '100%', md:'50%'}} my='20px' p='40px' viewport={{once: true}} initial={{opacity:0, y: 90}} whileInView={{opacity: 1, y: 0, transition: introStyle}} background="#00000019" borderRadius='15px' ml='10px'>
                      <Box py='20px' fontSize='30px' fontWeight='700' display='flex' alignItems='center'>
                        <Box w={`${elem[1].size}`}>
                            <Player style={{marginRight: '10px'}} src={elem[1].imageLottie} loop autoplay></Player>
                        </Box>
                            {elem[1].title}
                      </Box>
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
