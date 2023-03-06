'use client'
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Home from '../components/Home'
import pres from '../../../public/President.webp'
import daologo from '../../../public/logo.png'
import Ziasir from '../../../public/Ziasir.webp'
import Instructors from '../components/instructors'
import { RevealList, RevealWrapper } from  'next-reveal'


export default function page() {
  return (
    <>
      <Home title='About' src='https://img.freepik.com/free-photo/loft-home-office-interior-design_53876-143117.jpg' />
      <Box>
        <Container maxW={1400}>
          <Flex my='50px' gap='30px' px={{ lg: '50px', base: '20px' }} display={{ lg: 'flex', base: 'grid' }}>
            <Box flexBasis='50%'>
            <RevealWrapper origin='left' delay={400} duration={1000} distance='500px' reset={true}>
              <Image src={pres} alt='president' />
              </RevealWrapper>
            </Box>
            <Box flexBasis='50%'>
              <RevealList interval={60} delay={500} origin='right' duration={1000} distance='500px' reset={true} >
              <Heading size='2xl' pb='20px'>Dr. Arif Alvi</Heading>
              <Text pb='20px'> Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</Text>
              <Text pb='20px'>Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.</Text>
              <Text>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>
              <Button colorScheme='teal' mt={5} size='md'> More Info</Button>
              </RevealList>           
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1400}>
          <Flex my='50px' gap='30px' px={{ lg: '50px', base: '20px' }} display={{ lg: 'flex', base: 'grid' }}>

            <Box flexBasis='50%'>
            <RevealList interval={60} delay={500} origin='left' duration={1000} distance='500px' reset={true} >
              <Heading size='2xl' pb='20px'>Panaverse DAO</Heading>
              <Text pb='20px'>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet</Text>
              <Text pb='20px'>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>
              <Button colorScheme='teal' mt={5} size='md'> More Info</Button>
            </RevealList>
            </Box>
            <Box flexBasis='50%' padding='60px' px='30px'>
            <RevealWrapper origin='right' delay={400} duration={1000} distance='500px' reset={true}>
              <Image src={daologo} alt='DaoLogo' />
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1400}>
          <Flex my='50px' gap='30px' px={{ lg: '50px', base: '20px' }} display={{ lg: 'flex', base: 'grid' }}>
            <Box flexBasis='50%'>
            <RevealWrapper origin='left' delay={400} duration={1000} distance='500px' reset={true}>
              <Image src={Ziasir} alt='Zia Sir' />
              </RevealWrapper>
            </Box>
            <Box flexBasis='50%'>
            <RevealList interval={60} delay={500} origin='right' duration={1000} distance='500px' reset={true} >
              <Heading size='2xl' pb='20px'>Zia Khan</Heading>
              <Text pb='20px'>CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.</Text>
              <Text pb='20px'>Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.</Text>
              <Button colorScheme='teal' mt={5} size='md'> More Info</Button>
            </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>
    <Instructors/>
    </>
  )
}
//margin top or padding buttom acts similarly. We use chakraui for image because we want to make it responsive otherwise we can use next/iamge. syntax of each is little different