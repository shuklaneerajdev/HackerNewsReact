import React from 'react';
import { List, Card , Icon, Button} from 'semantic-ui-react'
class NewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemId: null ,
            content: null,
          };      
    }
    componentDidMount(){
        const newsItemId = this.props.itemId;
        const fetchURL = "https://hacker-news.firebaseio.com/v0/item/"+newsItemId+".json?print=pretty";
        fetch(fetchURL).then(response => response.json())
        .then(responseData => this.setState({content: responseData, itemId: newsItemId}));
    }
    render() {
        let itemDisplayContent;
        if(this.state.content){
            itemDisplayContent = <Card fluid>
                <Card.Content>
                    <Card.Header>
                        {this.state.content.title}
                    </Card.Header>
                    <Card.Meta>
                        {this.state.content.type}
                    </Card.Meta>
                    <Card.Description>
                        {this.state.content.text}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href={this.state.content.url}>{this.state.content.url}</a>
                </Card.Content>
            </Card>
        }else{
            itemDisplayContent = <div>
                Loading....
            </div>
        }
        return(
            <div>
                {itemDisplayContent}
            </div>
        );
    }
}
export default NewsItem;
