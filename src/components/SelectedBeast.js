import {Component} from "react";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends Component {

    handleClose = () => {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                       <Modal.Title>{this.props.beast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{<img src={this.props.beast.image_url} alt={this.props.beast.description} width="100%" />}</Modal.Body>
                    <Modal.Footer><button onClick={this.props.closeModal}>Close</button></Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default SelectedBeast;