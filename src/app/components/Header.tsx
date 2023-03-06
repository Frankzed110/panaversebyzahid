"use client";
import { Box, Button, Container, Flex, SimpleGrid, Menu, IconButton, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import logobyzahid from "../../../public/logo.png";
export default function Header() {
  return (
    // <>
    //   <Box bg="tomato" w="100%" p={4} color="white">
    //     This is the Box
    //   </Box>
    //   <Box as="button" borderRadius="md" bg="tomato" color="white" px={4} h={8}>
    //     Button
    //   </Box>
    // </>
    <Box boxShadow="lg">
      <Container maxW={1400}>
        <SimpleGrid templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}>
          <Box>
            <Image src={logobyzahid} alt="panaversebyzahid"></Image>
          </Box>
          <Flex
            display={{ lg: "flex", base: "none" }}
            placeItems="center"
            color={"black"}
            fontSize={20}
            fontWeight="semibold"
            gap={10}
          >
            <Link href="/"> Home </Link>
            <Link href="/syllabus"> Syllabus </Link>
            <Link href="/explore"> Explore </Link>
            <Link href="/about"> About </Link>
            <Link href="/contact"> Contact </Link>
          </Flex>
          <Box display={{ lg: "flex", base: "none" }}>
            <Button pr="100px" mt="10px" size="lg" colorScheme="teal" float="right">
              Apply
            </Button>
          </Box>
          <Box pt='40px' display={{ base: 'initial', lg: 'none' }}>
            <Menu>
              <MenuButton float='right'
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>
                  <Link href="/"> Home </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/syllabus"> Syllabus </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/explore"> Explore </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/about"> About </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/contact"> Contact </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  ); // to add more components we add tags. bg is back ground and pd is padding. h is heigh.
  // container shows  the max limit of page.
  //to bring boxes in one line we use display flex or simple grid.We will use simple grid here, otherwise in last lectures we have used flex as well for reference see owais ali chakra UI pricing
}
// image component of next and chakra ui has little difference and needs to be taken care of
// alt attribute inside image is mandatory and if image does not load this appears instead.
//image link and script are components of next rest all chakra
//inside Flex all items will automatically get display flex. Div in which display flex property has passed to it
//properties of flex cannot be passed to box
//In component documentation  - style: it has all styling components
//css properties are very crucial
//Anything in layout will appear on all pages like header and footer
//to add links in hamburger we can use <link> 