'use client'

import React from 'react'
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function CaptionCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Design Projects 1',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://cdn.aarp.net/content/aarpe/es/home/dinero/presupuesto-y-ahorro/info-2021/lo-que-debes-saber-antes-de-comprar-al-por-mayor/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.688.jpeg/content/dam/aarp/money/budgeting_savings/2021/09/1140-shopping-cart-esp.jpg',
        },
        {
            title: 'Design Projects 2',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://static.vecteezy.com/system/resources/previews/013/258/779/non_2x/online-shopping-concept-trolley-as-shopping-cart-on-mobile-free-vector.jpg',
        },
        {
            title: 'Design Projects 3',
            text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://gerente.com/co/wp-content/uploads/sites/16/2021/09/compras.jpeg',
        },
    ]

    return (
        <Box position={'relative'} maxHeight={'200px'} maxW={'309px'} overflow={'hidden'} padding={3}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        width={'100%'}
                        height={'200px'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundImage={`url(${card.image})`}
                        backgroundSize="cover"

                    >
                        {/* This is the block you need to change, to customize the caption */}
                        <Container size="container.lg" height="600px" position="relative">
                            <Stack
                                spacing={6}
                                w={'full'}
                                maxW={'lg'}
                                position="absolute"
                                top="50%"
                                transform="translate(0, -50%)">
                                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                    {card.title}
                                </Heading>
                                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                                    {card.text}
                                </Text>
                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}