'use client'
import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Home from "../components/Home";
import { cards } from "../components/database";
import { core } from "../components/database";

export default function page() {
    return (
        <>
            <Home title='Syllabus' src='https://s35691.pcdn.co/wp-content/uploads/2022/06/chalkboard-step-ladder-progress-picture-id1391820946.jpg' />
            <Box pt='30px'>
                <Container maxW={1400}>
                    <Center flexDir='column'>
                        <Heading size='2xl'>Course Syllabus</Heading>
                        <Text fontWeight='medium' mt='20px' textAlign='center' px='130px'>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
                    </Center>
                    <Center flexDir='column' mt='20px'>
                        <Heading>Common In All</Heading>
                        <Text fontWeight='medium' mt='20px' textAlign='center' px='130px'>Every participant of the program will start by completing the following three core courses:</Text>
                    </Center>
                    <Center>
                        <Flex mt='30px' gap='20px'>
                            {core.map((elem) => (
                                <Box textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='30px' width='290px' key={elem.id}><Heading>{elem.heading}</Heading><Text fontWeight='medium' pt='5px'>{elem.text}</Text></Box>
                            ))}
                        </Flex>
                    </Center>
                    <Center flexDir='column' mt='20px'>
                        <Heading>Specialized Tracks</Heading>
                        <Text fontWeight='medium' mt='20px' textAlign='center' px='40px'>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
                    </Center>
                </Container>

                <Container maxW={1400} mt='50px' bgSize='cover' bgAttachment='fixed' bgImage='https://www.intechnic.com/hubfs/Blog/Featured%20Images/Color%20Accessibility%20%3F%20UX%20Best%20Practices%20for%20Using%20Color%20in%20Design.jpg'>
                    {cards.map((elem) => (
                        <Box pt='40px' key={elem.id}>
                            <Center flexDir='column' mt='50px'>
                                <Heading textColor='black'>{elem.Heading1}</Heading>
                                <Text fontWeight='medium' textColor='black' mt='20px' textAlign='center' px='130px'>{elem.Text1}</Text>
                            </Center>
                            <Center>
                                <Flex mt='30px' gap='20px'>
                                    <Box bgColor='white' textColor='black' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='30px' width='350px'><Heading>{elem.Heading2}</Heading><Text fontWeight='medium' pt='5px'>{elem.Text2}</Text></Box>
                                    <Box bgColor='white' textColor='black' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='30px' width='350px'><Heading>{elem.Heading3}</Heading><Text fontWeight='medium' pt='5px'>{elem.Text3}</Text></Box>
                                </Flex>
                            </Center>
                        </Box>
                    ))}
                </Container>
            </Box>

        </>
    )
}