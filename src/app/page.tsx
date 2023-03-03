"use client";

import { ChakraProvider } from '@chakra-ui/react'
import Banner from './components/Banner';
import Footer from './components/Footer'
import Header from './components/Header'

export default function page() {
  return <ChakraProvider>
    {/* <Header/> */}
    <Banner />
    {/* <Footer/> */}
  </ChakraProvider>


}
//to show the header and footer on all pages we have put it in layout section
//page.tsx automatically applies to layout.tsx due to children prop