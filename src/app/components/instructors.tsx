import { Box, Center, Container, Heading, Image, Text, Flex, SimpleGrid } from '@chakra-ui/react'
// import React from 'react'
import { data } from '../components/database'
import { RevealList, RevealWrapper } from  'next-reveal'

// interface data {
//     id:number,
//     src:string,
//     heading:string,
//     text: string
// }

export default function Instructors() {
    return (
        <Box>
            <Container maxW={1400}>
                <Center>
                    <Heading> Our Instructors</Heading>
                </Center>
                <RevealWrapper origin='top' delay={400} duration={1000} distance='500px' reset={true}>
                <Flex flexDir='row'>
                    {data.map((ins) => (
                    <Box key={ins.id}>
                        <Center pt='20px' pb='20px'>
                            <Image borderRadius='full' width={100} height={100} src={ins.src} /> 
                        </Center>
                        <Heading  pb='10px' textAlign='center' size='md'>{ins.heading}</Heading>
                        <Text textAlign='center'fontSize='md' pb='20px'>{ins.text}</Text>
                    </Box>
                    ))}
                    </Flex>
                    </RevealWrapper>
            </Container>
        </Box>
    )
}
//one method is to copy all the boxes i.e. 5 and apply flex and flex direction to bring all in one row. or use minchildwidth with simple grid.
//otherwise if you give px i.e. padding it will never allow the instructors to appear
//.map will bring all data in database to front end from one function
//headless cms is more conveninent way compared to .map
//data.map define function and in next line the key picks the data from database 
//tailwind directly convert into css and render on client. tailwand css support server side rendering. use client makes appear on cleint side.