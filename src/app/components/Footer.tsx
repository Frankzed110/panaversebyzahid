"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  Image
} from "@chakra-ui/react";
// import Image from "next/image";
import Link from "next/link";
import zahidlogo from "../../../public/logo.png";
export default function Footer() {
  return (
    <Box bg='black'>
      <Container maxW={1300}>
        <SimpleGrid textAlign={{lg:'start', base:'center'}}spacing='40px' py='60px' templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}>
          <Box>
            <Heading pb='20px' color='white'> ABOUT US</Heading>
            {/* <Image  src={zahidlogo} alt="footerlogo by zahid"></Image>  now we are using chakra UI because image alignment property in next is unknown*/}
            <Image m={{base:'auto', lg:'0'}} src='/logo.png' alt="footerlogo by zahid"></Image>
            <Text pt='15px' pr={{lg:'40px', base:'0'}} color='gray'>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            </Text>
          </Box>
          <Box>
            <Heading pb='15px' color='white'> USEFUL LINKS</Heading>
            <Grid pt='40px'color='gray'>
              <Link href=""> Home </Link>
              <Link href="/"> Syllabus </Link>
              <Link href="/"> Explore </Link>
              <Link href="/"> About </Link>
              <Link href="/"> Contact </Link>
            </Grid>
          </Box>
          <Box>
            <Heading pb='15px' color='white'> FOLLOW US </Heading>
            <Grid pt='40px' color='gray'>
              <Link href="/"> Facebook </Link>
              <Link href="/"> LinkedIn </Link>
              <Link href="/"> Twitter </Link>
              <Link href="/"> Youtube </Link>
              <Link href=""> GitHub </Link>
            </Grid>
          </Box>
          <Box>
            
          <Heading pb='15px' color='white'> CONTACT US </Heading>
          <Grid pt='40px' color='gray'>
          <Link href="/">+92 331 3173949</Link>
          <Link href="/">info@candlelightguide.com</Link>
          <Link href="/">Islamabad, Pakistan</Link>
          </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
///template column 4 represents we have 4 boxes and they will come in  a line. it means in one line how many columns we want to create
//we will use next link for Links . Chakra link refreshes whole page. href is mandatory property
//to change font style size etc of text we can use it within text tags
//image width and height we can change with w and h in image tags
//pd r and pd l will put spaces between boxes. other method is by spacing x and spacing y and this is done on simple grid and can also be done with gap. Gap gives spacing around box overall but spacing gives either on X or Y.
//base is used for small devices for responsivess and it is always inside curly brackets and lg is for large screens like laptop