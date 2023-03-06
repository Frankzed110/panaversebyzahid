import { Container, Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import webp from '../../../public/logo2.webp'
import bg from '../../../public/purple bg.jpg'
import webp2 from '../../../public/logo3.webp'
import {RevealWrapper} from 'next-reveal'
export default function Banner() {
    return (
        <>
            <Box bgImage='https://wallpaperaccess.com/full/270162.jpg' >
               <RevealWrapper origin='left' delay={400} duration={1000} distance='500px' reset={true}>
                <Container maxW={1400}>
                    <Flex pt={{ lg: '150px', base: '30px' }} pb='100px' px={{ lg: '40px', base: '5px' }}>
                        <Box flexBasis='50%' padding='40px'>
                            <Heading size='2xl'> Prepare yourself for the Next Generation of Internet with Panaverse </Heading>
                            <p>
                                Panaverse DAOs One Year Earn as you Learn Program allow you to master Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud and Edge Computing, coupled with IoT Technologies
                            </p>
                            <Button size='lg' colorScheme='teal'>
                                More Info
                            </Button>
                        </Box>
                        <Box mt='-80px' flexBasis='50%'>
                            <Image src={webp} alt='panaverse' width={500} height={250} />
                        </Box>
                    </Flex>
                </Container>
                </RevealWrapper>
            </Box>
            <Box>
                <Container maxW={1400}>
                    <Flex pt='150px' pb='100px' px='40px' display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis='50%' mt='-50px'>
                        <RevealWrapper origin='left' delay={400} duration={1000} distance='500px' reset={true}>
                            <Image src={webp2} alt='webp2' width={500} height={250} />
                            </RevealWrapper>
                        </Box>
                        <Box flexBasis='50%' padding='20px'>
                        <RevealWrapper origin='right' delay={400} duration={1000} distance='500px' reset={true}>
                            <Heading size='2xl'>Program Of Studies</Heading>
                            <Text pt='20px' pb='20px' fontSize={18}>
                                This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.
                            </Text>
                            <Button size='lg' colorScheme='teal'> Read More </Button>
                            </RevealWrapper>
                        </Box>
                        
                    </Flex>
                </Container>
            </Box>
            <Box>
                <Container maxW={1400}>
                    <Flex pt='150px' pb='100px' px='40px' display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis='50%' padding='20px'>
                        <RevealWrapper origin='left' delay={400} duration={1000} distance='500px' reset={true}>
                            <Heading size='2xl'>Program Of Studies</Heading>
                            <Text pt='20px' pb='20px' fontSize={18}>
                                This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.
                            </Text>
                            <Button size='lg' colorScheme='teal'> Read More </Button>
                        </RevealWrapper>
                        </Box>
                        <Box flexBasis='50%' mt='-50px'>
                        <RevealWrapper origin='right' delay={400} duration={1000} distance='500px' reset={true}>
                            <Image src={webp2} alt='webp2' width={500} height={250} />
                        </RevealWrapper>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}
//Instead of margin in button we use padding  bottom in the text to achieve some space
// we can wrap into layout as well the chakra provider
//if we add header and footer into layout this will appear on each page