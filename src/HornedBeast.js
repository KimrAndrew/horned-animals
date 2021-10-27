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
    favorite = () => {
        this.setState({favorites: this.state.favorites + 1});
    }

    render =() => {
        return (
            <>  
                <Card style={{ width: '18rem'}}>
                    <Card.Img onClick={this.favorite} variant='top' src={this.props.imageUrl} alt={this.props.description} title={this.props.title} />
                    <Card.Body>
                        <Card.Title as='h2'>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text><span>❤️</span><span>{this.state.favorites}</span></Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default HornedBeast;