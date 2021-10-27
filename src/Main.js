import { Component } from "react";
import HornedBeast from "./HornedBeast.js";
import data from "./assets/data.json";
import Row from "react-bootstrap/Row";

class Main extends Component {
    //returns an array of <HornedBeast /> components
    unleashTheBeasts() {
        return data.map(beast => <HornedBeast beast={beast} />);
    }
    //huh, wasn't expecting that to actually work
    //was not expecting to be able to just render an array of components
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