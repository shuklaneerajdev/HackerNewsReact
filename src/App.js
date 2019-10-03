import React from 'react';
import NewsItem from './NewsItem';
import { Container, List, Card } from 'semantic-ui-react';

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null ,
    };
  }
  render() {
    console.log("Rendering it...")
    const numberOfItems = this.state.data && this.state.data.length;
    let displayValue;
    if(numberOfItems){
      displayValue = (<List>        
        {this.state.data.map(newsItemId => <List.Item key={newsItemId}>< NewsItem itemId={newsItemId} /></List.Item> )}
      </List>)
    }else{
      displayValue = (<Card fluid>
        <Container>
          <p>
          Loading data....
          </p>
        </Container>
      </Card>);
    }

    return (
      displayValue
    );
  }
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then(
      response => response.json()
    ).then(displayData => {this.setState({data: displayData})});
  }
}

export default App;
