import React from 'react';
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
            itemDisplayContent = <div>
                <h3>{this.state.content.title}</h3>
                <p>
                    Type: <i>{this.state.content.type}</i>
                </p>
                <p>
                    {this.state.content.url}
                </p>
                <p>
                    {this.state.content.text}
                </p>

            </div>
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
