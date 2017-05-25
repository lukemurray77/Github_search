import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { modalClose, modalOpen } from '../actions/modal-open';


class InsideModal extends Component {
    constructor(props) {
        super(props)
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    render() {
        return (
            <div>
                <Button bsStyle="primary" onClick={this.handleOpenModal}>
                    More Info!
                </Button>

                <Modal show={this.props.isOpen} onHide={this.handleCloseModal}>
                    <Modal.Header>
                        <Modal.Title>
                            <div>
                            <img src={this.props.avatar} alt=""/>
                            {this.props.name}/{this.props.user}
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Number of forks: {this.props.forks}</p>
                        <p>Number of issues: {this.props.open_issues}</p>
                        <p>Number of stars: {this.props.stars}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleCloseModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    handleOpenModal() {
        this.props.openModal();
    }
    handleCloseModal() {
        this.props.closeModal();
    }
}


function mapStateToProps(state) {
    return {
        isOpen: state.modalOpen.isOpen,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        openModal: function () {
            dispatch(modalOpen());
        },
        closeModal: function () {
            dispatch(modalClose());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InsideModal);



