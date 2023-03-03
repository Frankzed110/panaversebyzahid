import { Container, Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import webp from '../../../public/logo2.webp'
import bg from '../../../public/purple bg.jpg'
import webp2 from '../../../public/logo3.webp'
export default function Banner() {
    return (
        <>
        <Box bgImage='https://wallpaperaccess.com/full/270162.jpg' >
            <Container maxW={1400}>
                <Flex pt={{lg:'150px', base:'30px'}} pb='100px'px={{lg:'40px', base:'5px'}}>
                    <Box flexBasis='50%' padding='40px'>
                        <Heading size='2xl'> Prepare yourself for the Next Generation of Internet with Panaverse </Heading>
                        <Text pt='10px'pb='10px' >
                        Panaverse DAO's One Year 'Earn as you Learn Program' allow you to master Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud and Edge Computing, coupled with IoT Technologies
                        </Text>
                        <Button size='lg' colorScheme='teal'>
                            More Info
                        </Button>
                    </Box>
                    <Box mt='-80px' flexBasis='50%'>
                    <Image src={webp} alt='panaverse' width={500} height={250}/>
                    </Box>
                </Flex>
            </Container>
        </Box>
        <Box>
            <Container maxW={1400}>
                <Flex pt='150px' pb='100px'px='40px' display={{lg:'flex', base:'grid'}}>
                    <Box flexBasis='50%' mt='-50px'>
                      <Image src={webp2} alt='webp2' width={500} height={250}/> 
                    </Box>
                    <Box flexBasis='50%' padding='20px'>
                        <Heading size='2xl'>Program Of Studies</Heading>
                    <Text pt='20px'pb='20px' fontSize={18}>
                    This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. 
                    </Text>
                    <Button size='lg' colorScheme='teal'> Read More </Button>
                    </Box>
                </Flex>
            </Container>
        </Box>
        <Box>
            <Container maxW={1400}>
                <Flex pt='150px' pb='100px'px='40px' display={{lg:'flex', base:'grid'}}>
                <Box flexBasis='50%' padding='20px'>
                        <Heading size='2xl'>Program Of Studies</Heading>
                    <Text pt='20px'pb='20px' fontSize={18}>
                    This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. 
                    </Text>
                    <Button size='lg' colorScheme='teal'> Read More </Button>
                    </Box>
                    <Box flexBasis='50%' mt='-50px'>
                      <Image src={webp2} alt='webp2' width={500} height={250}/> 
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