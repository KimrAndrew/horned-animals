import { Component } from "react";
import Card from "react-bootstrap/Card";

class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        }
    }
    
    //using an arrow function here prevents context from being set to function scope
    clickHandler = () => {
        this.setState({favorites: this.state.favorites + 1});
        this.props.selectBeast(this.props.beast.title);
    }

    render =() => {
        return (
            <>  
                <Card style={{ width: '18rem'}}>
                    <Card.Img onClick={this.clickHandler} variant='top' src={this.props.beast.image_url} alt={this.props.beast.description} title={this.props.beast.title} />
                    <Card.Body>
                        <Card.Title as='h2'>{this.props.beast.title}</Card.Title>
                        <Card.Text>{this.props.beast.description}</Card.Text>
                        <Card.Text><span>❤️</span><span>{this.state.favorites}</span></Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default HornedBeast;