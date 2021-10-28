import { Component } from "react";
import HornedBeast from "./HornedBeast.js";
import Row from "react-bootstrap/Row";

class Main extends Component {
    //returns an array of <HornedBeast /> components
    unleashTheBeasts() {
        return this.props.beasts.map(beast => <HornedBeast selectBeast={this.props.selectBeast} beast={beast} key={beast.title}/>);
    }

    render() {
        return (
            <>  
                <Row xs={1} sm={2} md={3} lg={4}>
                    {this.unleashTheBeasts()}
                </Row>
            </>
        )
    }
}

export default Main;