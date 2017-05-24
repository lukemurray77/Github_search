import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import moment from 'moment';
import { modalClose, modalOpen } from '../actions/modal-open';
import Modal from 'react-modal';

class Repo extends Component {
    constructor(props) {
        super(props)
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    render() {
        const newDate = moment(new Date());
        const oldDate = moment(this.props.time);
        const lastUpdate = newDate.diff(oldDate, 'days');
        const pathToRepo = `/${this.props.user}/${this.props.name}`
        const stars = this.props.stars ? <p><i className="fa fa-star star" aria-hidden="true"></i> {this.props.stars}</p> : '';

        return (
            <div className="columns each-repo">
                <div className="column is-three-quarters">
                    <Link to={pathToRepo}>
                        <h3 className="repo-title">{this.props.user}/{this.props.name}</h3>
                    </Link>
                    <p className="repo-description">{this.props.description}</p>
                    <p className="last-updated">Last updated {lastUpdate} days ago.</p>
                </div>
                <div className="column">
                    <p>{this.props.language}</p>
                    {stars}
                    <button onClick={this.handleOpenModal}>More Info</button>
                    <Modal
                        isOpen={this.props.isOpen}
                    >
                        <button onClick={this.handleCloseModal}>Close Modal</button>
                    </Modal>
                </div>

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
        isOpen: state.modalOpen.isOpen
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

export default connect(mapStateToProps, mapDispatchToProps)(Repo);
