import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
// import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};


export const Example = () => {
  const [[page, direction], setPage] = useState([0, 0]);
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

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, testimony.length, page);

  
  
  useEffect(() => {
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  
  const interval = setInterval(() => {paginate(1)}, 5000);
  clearInterval(interval);

    paginate(1)
  }, [page])





  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          style={{overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', textAlign: 'center'}}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          // onDragEnd={(e, { offset, velocity }) => {
          //   const swipe = swipePower(offset.x, velocity.x);

          //   if (swipe < -swipeConfidenceThreshold) {
          //     paginate(1);
          //   } else if (swipe > swipeConfidenceThreshold) {
          //     paginate(-1);
          //   }
          // }}
          >&quot;{testimony[imageIndex].review}&quot;</motion.div>
      </AnimatePresence>
      {/* <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div> */}
    </>
  );
};


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
            <Flex width='100%'>
              <Flex width='100%' overflow='hidden' display='flex' justify='center' align='center' mt='30px'>
                {/* {testimony.map((elem, index) => (<Box minWidth='full' transform='translateX(-100%)' mt='30px' textAlign='center' key={index}>&quot;{elem.review}&quot;</Box>))} */}
                <Example />
              </Flex>
            </Flex>


        </Box>
    </Flex>
  )
}

export default Testimonial