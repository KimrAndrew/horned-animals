import { Component } from "react";
import HornedBeast from "./HornedBeast.js";
import data from "./assets/data.json";
import Card from "react-bootstrap/Card";

class Main extends Component {
    //returns an array of <HornedBeast /> components
    unleashTheBeasts() {
        let beasts = [];
        data.forEach(beast => {
            beasts.push(<HornedBeast imageUrl={beast.image_url} title={beast.title} description={beast.description} keyword = {beast.keyword} horns={beast.horns} />);
        });
        return beasts;
    }
    //huh, wasn't expecting that to actually work
    //was not expecting to be able to just render an array of components
    render() {
        return (
            <>  
                {this.unleashTheBeasts()}
            </>
        )
    }
}

export default Main;