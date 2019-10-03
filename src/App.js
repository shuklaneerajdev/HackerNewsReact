import React from 'react';
import NewsItem from './NewsItem';

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
      displayValue = (<ul>        
        {this.state.data.map(newsItemId => <li key={newsItemId}>< NewsItem itemId={newsItemId} /></li> )}
      </ul>)
    }else{
      displayValue = (<div>
        Going to load data....
      </div>);
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
