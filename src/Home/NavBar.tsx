'use client'

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
 
  ButtonGroup,
} from '@chakra-ui/react'
import { CalendarIcon, EmailIcon, PlusSquareIcon, SearchIcon, StarIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Nav() {
  return (
    <>
      <Box 
      position="fixed" 
      bottom={0} 
      left={0} 
      right={0} 
      bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <ButtonGroup>
          <Button>
            <CalendarIcon/>
          </Button>
          <Button>
          <SearchIcon /> 
          </Button>
          <Button>
          <PlusSquareIcon/>
          </Button>
          <Button>
            <StarIcon/>
          </Button>
          <Button>
          <EmailIcon/>
          </Button>
          </ButtonGroup>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              

          
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}