'use client';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo from  '@/assets/Images/PNG/Notation normal tp.png';
import { FaBars } from 'react-icons/fa';
import { NotationClient } from '../context/supabaseClientSet';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const Header = () => {
  const mainUser = useContext(UserContext)
  const [logged, setLogged] = useState<Boolean>(false)
  useEffect(() => {
    const obtainUser = async () => {
      if (mainUser?.user) {
        setLogged(true)
      } else {
        const { data: { user } } = await NotationClient.auth.getUser()
        if (user) {
          if (user.identities)
            mainUser?.setUser({
              id: user.id,
              email: user.email as string,
              full_name: user.identities.length > 1 && user.identities[0].identity_data?.full_name
            })
            setLogged(true)
          }
        }
      }
      obtainUser();
    }
  , [mainUser])
  return (
    <Flex py='20px' width='100%' justify='center' align='center'>
        <Box px='20px' width='100%' maxWidth='1280px' display='flex' alignItems='center' justifyContent='space-between'>
          <Box width='150px'>
            <Image src={Logo}  alt="Notation" />
          </Box>

          <Box display={{base: 'block', md: 'none'}}>
            <FaBars />
          </Box>
          <Box display={{base: 'none', md:'flex'}} alignItems='center'>
            <Box px='20px' display='flex' justifyContent='center' alignItems='center'>
              <Link href="" pr='15px' _hover={{textDecoration:'none'}}>Home</Link>
              <Link href="" pr='15px' _hover={{textDecoration:'none'}}>About Us</Link>
              <Link href="/pricing" pr='15px' _hover={{textDecoration:'none'}}>Pricing</Link>
            </Box>
          </Box>
          <Box display={{base: 'none', md:'flex'}} alignItems='center'>
            {logged ? 
            <Button as={Link} href="/dashboard" textDecor={'none'} variant='solid' background="#383838" color='white' _hover={{background: '#2d2d2de2'}}>
              Dashboard
            </Button> : 
            <Box>
              <Link href="/auth"><Button variant='solid' background="#383838" color='white' _hover={{background: '#2d2d2de2'}}>Sign In</Button></Link>
            </Box>
            }
          </Box>
        </Box>
    </Flex>
  )
}

export default Header