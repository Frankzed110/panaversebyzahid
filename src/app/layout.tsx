"use client";
import "./globals.css"
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import Header from './components/Header';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
          <Header />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  )
}
//applies on all pages, html, head will apply here, UI will be written in body.
//children prop will get all code, layout will apply as wrapper