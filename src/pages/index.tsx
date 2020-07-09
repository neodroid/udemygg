import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/core";
import Link from 'next/link'

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { HomeCard } from "../components/HomeCard";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import React from 'react';




const Index = () => (
  <Container>
    <Hero title="UdemyMurah.id"/>
    <Main >
      
      

      <List spacing={3} my={0} >
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <Link href="/development-page" 
          >
            <a>ke development</a>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <Link href="/software-page" 
          >
            <a>ke software</a>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <Link href="/design-page" 
          >
            <a>Design</a>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <Link href="/business-page" 
          >
            <a>business</a>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <Link href="/finance-accounting-page" 
          >
            <a>finance</a>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <Link href="/marketing-page" 
          >
            <a>marketing</a>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <Link href="/office-page" 
          >
            <a>office</a>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" />
          <Link href="/academics-page" 
          >
            <a>academics</a>
          </Link>
        </ListItem>
        
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>BLM ❤️ KELAR</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
