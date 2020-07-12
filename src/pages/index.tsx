import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Box
} from "@chakra-ui/core";
import Link from 'next/link'

import { Hero } from "../components/Hero";
import { SmallHero } from "../components/SmallHero";
import { Container } from "../components/Container";
import { HomeCard } from "../components/HomeCard";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import React from 'react';
import { MenuCard } from "../components/MenuCard";
import Head from 'next/head'




const Index = () => (
  
  <Container>
    <Head>
        <title>Udemy Murah</title>
      </Head>
    <SmallHero />
    <Main justifyContent="center" alignItems="center" >
    <Box
          color="#4A5568"
          mt="1"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          fontSize="3vw"
         // isTruncated
        >
          Pilih Kategori
        </Box>
      <Container flexDirection="row"
        flexWrap="wrap"
        bottom="0"
        width="100%"
        flex="1"
        justifyContent="center" 
        py={2}>
          <MenuCard 
            img={"https://img-a.udemycdn.com/course/480x270/629302_8a2d_2.jpg"}
            title={"IT & SOFTWARE"}
            price={"Programming Language | Network & Security | Operating Systems | IT Certification | Other"}
            link={"/software-page"}

          />
          <MenuCard 
            img={"https://img-a.udemycdn.com/course/480x270/1565838_e54e_11.jpg"}
            title={"DEVELOPMENT"}
            price={"Web Development | Game Development | Software Engineering | Databases | Mobile Apps"}
            link={"/development-page"}
            

          />
          
          <MenuCard 
            img={"https://img-a.udemycdn.com/course/480x270/1643044_e281.jpg"}
            title={"DESIGN"}
            price={"Graphic Design | Design Thinking | 3D & Animation | Interior Design | Web Design | User Experience"}
            link={"/design-page"}

          />
          <MenuCard 
            img={"https://img-a.udemycdn.com/course/480x270/648826_f0e5_4.jpg"}
            title={"BUSINESS"}
            price={"Entrepreneurship | Strategy | Business Law | Management | Industry | Real Estate"}
            link={"/business-page"}

          />
          <MenuCard 
            img={"https://img-a.udemycdn.com/course/480x270/767836_a4d6_2.jpg"}
            title={"FINANCE"}
            price={"Investing & Trading | Financial Modeling & Analysis | Economics | Taxes | Other Finance & Economics"}
            link={"/finance-accounting-page"}

          />
          <MenuCard 
            img={"https://img-a.udemycdn.com/course/480x270/573984_ce2a_3.jpg"}
            title={"MARKETING"}
            price={"Product Marketing | Social Media Marketing | Advertising |  Branding | Search Engine Optimization"}
            link={"/marketing-page"}

          />
          <MenuCard 
            img={"https://img-a.udemycdn.com/course/480x270/256646_c49f_7.jpg"}
            title={"ACADEMICS"}
            price={"Engineering | Humanities | Language | Social Science | Other Teaching & Academics"}
            link={"/academics-page"}

          />
          </Container>
    
      
    </Main>

    
    <Footer>
      <Text> © 2020 LesMurah.com | Neodroid</Text>
    </Footer>
    <CTA />
  </Container>
 
);

export default Index;
