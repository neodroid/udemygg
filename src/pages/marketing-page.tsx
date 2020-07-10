import {
    Link as ChakraLink,
    Text,
    Code,
    Icon,
    List,
    ListIcon,
    ListItem,
  } from "@chakra-ui/core";
import React, { Component } from 'react';
import { CourseCard } from "../components/CourseCard";
import { Container } from "../components/Container";
import { Hero } from "../components/Hero";

import { HomeCard } from "../components/HomeCard";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Pagination } from "../components/pagination";



 
var base;
class App extends React.Component<{},any>{
  constructor(props) {
    super(props);
 
    this.state = {
        results: [],
       
    };
    
    
  }
 
  componentDidMount() {
    fetch("/api/marketing-api")
      .then(response => response.json())
      .then(base => this.setState({ results: base.dataTotal }));
     
      //console.log(data.pages);
      
  }
 

  render() {
    const { results } = this.state;
 
    return (
        <Container>
            <Hero title="Marketing"/>
            <Main>
            <Container
        flexDirection="row"
        flexWrap="wrap"
        bottom="0"
        width="100%"
        flex="1"
        justifyContent="center" 
        py={2}
      >
        {/* <CourseCard img={data.results[0].ImageUrl}/>
        <CourseCard /> */}
         {results.map(hit =>
          <CourseCard 
            img={hit.ImageUrl}
            title={hit.Title}
            price={hit.PriceOld}
            review={hit.Reviews}

          />
        )}
       
      </Container>
     
            </Main>
             
      <Footer>
      <Text>BLM ❤️ KELAR</Text>
    </Footer>
   
        </Container>
       
      
      
    );
  }
 
 
  
}

 
export default App;
