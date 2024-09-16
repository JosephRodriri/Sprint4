'use client'

import {
  Box,
  Card,
  CardBody,
  Divider,
  
  Heading,
  Image,

  Stack,
  Text,
} from '@chakra-ui/react'
import Navbar from './Navbar'
import ProfileNav from './ProfileNav'
import Carrusel from './Carrusel'


export default function SplitScreen() {
  
  return (
    <>
      <Box style={{ position: 'absolute', zIndex:1 }}>
        <Navbar />
      </Box>
      <Box style={{ zIndex: 0 }}>
        <ProfileNav />
      </Box>
      <Box style={{ position: 'absolute', top: '100px'}}>
        <Carrusel />
      </Box>
    
      
    <Box style={{ position: 'absolute', top: '300px', left: '0' }}>
      <Card w={200}>
        <CardBody>
          <Image
            src='https://www.alcarrito.com/media/catalog/product/1/1/11001939.jpg?width=600&height=600&canvas=600,600&optimize=medium&bg-color=255,255,255&fit=bounds'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Celular SAMSUNG Galaxy A05 64GB Gris</Heading>
            
            <Text color='blue.600' fontSize='2xl'>
              $359.900
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        
      </Card>
      <Card w={200}>
        <CardBody>
          <Image
            src='https://www.alcarrito.com/media/catalog/product/c/h/challenger_tv_40_1_1.jpg?width=600&height=600&canvas=600,600&optimize=medium&bg-color=255,255,255&fit=bounds'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Televisor Challenger 43 Pulgadas LED Full HD Smart TV</Heading>
            
            <Text color='blue.600' fontSize='2xl'>
              $ 1.049.000

            </Text>
          </Stack>
        </CardBody>
        <Divider />
        
      </Card>

      <Card w={200}>
        <CardBody>
          <Image
            src='https://www.alcarrito.com/media/catalog/product/a/m/am01745_4.jpg?width=600&height=600&canvas=600,600&optimize=medium&bg-color=255,255,255&fit=bounds'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Reloj Smartwatch Multifuncional Tecnología Avanzada - 1745</Heading>
            
            <Text color='blue.600' fontSize='2xl'>
              $149.900
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        
      </Card>

      </Box>
      

    </>
  )
}