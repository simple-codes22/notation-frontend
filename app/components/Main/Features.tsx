"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Features = () => {
  const mainFeatures = [
    {
      title: "Interactive Quizzes",
      desc_:
        "Engage in dynamic quizzes that make learning math enjoyable and effective. Our interactive platform offers a variety of question formats, ensuring an engaging experience for learners of all levels.",
    },
    {
      title: "Customization Options:",
      desc_:
        "Tailor your quiz experience to suit your learning preferences. Choose from a range of topics and difficulty levels, allowing you to focus on specific areas or challenge yourself with comprehensive assessments.",
    },
    {
      title: "Real-Time Feedback:",
      desc_:
        "Receive instant feedback on your quiz results, helping you identify strengths and areas for improvement. Our detailed analytics and insights empower you to track your progress and stay motivated on your math journey.",
    },
    {
      title: "Comprehensive Question Bank",
      desc_:
        "Explore a vast library of math topics, from basic arithmetic to advanced calculus. Our extensive question bank ensures that you have access to a wide range of exercises to enhance your skills and knowledge.",
    },
    {
      title: "Progress Tracking",
      desc_:
        "Monitor your progress over time and visualize your improvement with our intuitive progress tracking tools. Stay informed about your performance and celebrate your achievements as you work towards mastering math concepts.",
    },
    {
      title: "Accessible Anywhere, Anytime",
      desc_:
        "Access our exam suite from any device with an internet connection, allowing you to study math whenever and wherever it's convenient for you. Whether you're at home, in school, or on the go, our platform is accessible 24/7.",
    },
    {
      title: "Engaging Learning Environment",
      desc_:
        "Immerse yourself in an interactive learning environment that fosters curiosity and exploration. Our platform is designed to make math learning fun and exciting, encouraging you to embrace challenges  and unlock your full potential.",
    },
    {
      title: "Community Support",
      desc_:
        "Connect with a community of passionate learners and educators who share your love for math. Share tips, ask questions, and collaborate with others to enhance your learning experience and achieve your goals.",
    },
  ];

  
  return (
    <Flex width='100%' justify='center' >
        <Box as='section' width='100%' maxW='1280px'>
            <Text fontSize='30px' fontWeight={700} textAlign='center' mt='50px'>Our Amazing Features</Text>
        <Box>
            {mainFeatures.map((elem, index) => {
                return (<Box key={index}>
                    <Text>
                        {elem.title}
                    </Text>
                    <Text>
                        {elem.desc_}
                    </Text>
                </Box>)
            })}
        </Box>
        </Box>
    </Flex>
  );
};

export default Features;
