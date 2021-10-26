import { Component } from "react";

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

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img onClick={this.favorite} src={this.props.imageUrl} alt={this.props.description} title={this.props.title} />
                <p>{this.props.description}</p>
                <p><span>❤️</span><span>{this.state.favorites}</span></p>
            </>
        )
    }
}

export default HornedBeast;