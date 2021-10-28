import { Component } from "react";
import Form from "react-bootstrap/Form"
class Header extends Component {

    filterOnChange = (event) => {
        let beasts = this.props.beasts;
        let filtered = [];
        switch(event.target.value) {
            case "1":
                filtered = beasts.filter(beast => beast.horns === 1);
                break;
            case "2": 
                filtered = beasts.filter(beast => beast.horns === 2);
                break;
            case "3": 
                filtered = beasts.filter(beast => beast.horns === 3);
                break;
            case ">3":
                filtered = beasts.filter(beast => beast.horns > 3);
                break;
            default: filtered = beasts;
        }
        this.props.beastFilter(filtered);
    }
    render() {
        return (
            <>
                <h1>Horned Animals</h1>
                <Form>
                    <Form.Select onChange={this.filterOnChange}>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value=">3">More Than Three</option>
                        <option value="all">Show all</option>
                    </Form.Select>
                </Form>
            </>
        )
    }
}

export default Header;

