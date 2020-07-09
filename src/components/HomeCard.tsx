import React, { Component } from 'react';
import { CourseCard } from "../components/CourseCard";
import { Container } from "../components/Container";

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';


//export default App;
export const HomeCard = () => {
var data;
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
        results: [],
    };
    
    
  }
 
  componentDidMount() {
    fetch("/api/development-api")
      .then(response => response.json())
      .then(data => this.setState({ results: data.results }));
  }
 

  render() {
    const { results } = this.state;
 
    return (
        <Container
        flexDirection="row"
        flexWrap="wrap"
        bottom="0"
        width="100%"
        flex="1"
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
    );
  }
 
  
}

 

    
}