import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Persistor from '../../util/persistor';

import {Modal, Button, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import './recallDrilled.css';

class RecallDrilled extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.match.params.id,
            recallItem: Persistor.getRecallById(props.match.params.id),
            removed: false,
            showNoteModal: false,
            showCommunicationModal: false,
            note: '',
            to: '',
            from: '',
            medium: '',
            body: ''
        };

        this.deleteRecall = this.deleteRecall.bind(this);
        this.toggleCommunication = this.toggleCommunication.bind(this);
        this.toggleNote = this.toggleNote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addNote = this.addNote.bind(this);
        this.addCommunication = this.addCommunication.bind(this);
    }

    handleChange(e) {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    generateNotes(){
        const data = this.state.recallItem[0].notes;
        if(data.length >= 1){
            return (
              data.map((e, i) => {
                  return (
                    <li key={i} className="list-group-item list-group-item-action list-group-item-info">
                        <div className="row">
                            <div className="col">
                                <span className="badge badge-dark">Note</span><br/>
                                {e.content}
                            </div>
                            <div className="col">
                                <span className="badge badge-dark">Created</span><br/>
                                {new Date(e.date_created).toDateString()}
                            </div>
                        </div>
                    </li>
                  );
              })
            );
        } else {
            return <div className="alert alert-warning">No Notes Found</div>
        }
    }

    generateCommunications(){
        const data = this.state.recallItem[0].communications;
        if(data.length >= 1){
            return (
                data.map((e, i) => {
                    return (
                        <li key={i} className="list-group-item list-group-item-action list-group-item-info">
                            <div className="row">
                                <div className="col">
                                    <span className="badge badge-dark">Primary</span><br/>
                                    From: {e.from}<br/>
                                    To: {e.to}
                                </div>
                                <div className="col">
                                    <span className="badge badge-dark">Content</span><br/>
                                    {e.body}
                                </div>
                                <div className="col">
                                    <span className="badge badge-dark">Date</span><br/>
                                    {new Date(e.date_created).toDateString()}
                                </div>
                            </div>
                        </li>
                    );
                })
            );
        } else {
            return <div className="alert alert-warning">No Communications Found</div>
        }
    }

    deleteRecall(){
        this.setState({removed: true});
        Persistor.removeRecall(this.state.id);
        setTimeout(() => {
            window.location.replace('/recalls');
        }, 1000);
    }

    toggleCommunication() {
        this.setState({
            showCommunicationModal: !this.state.showCommunicationModal
        });
    }

    toggleNote() {
        this.setState({
            showNoteModal: !this.state.showNoteModal
        });
    }

    addNote(e){
        e.preventDefault();
        let noteItem = {
            content: this.state.note,
            date_created: new Date()
        };

        Persistor.addNote(this.state.id, noteItem);
        this.toggleNote();
        window.location.reload();
    }

    addCommunication(e){
        e.preventDefault();
        let communicationItem = {
            from: this.state.from,
            to: this.state.to,
            body: this.state.body,
            medium: this.state.medium,
            date_created: new Date()
        };

        Persistor.addCommunication(this.state.id, communicationItem);
        this.toggleCommunication();
        window.location.reload();
    }

    render() {
        const data = this.state.recallItem[0].meta;
        const automatic = this.state.recallItem[0].automatic;

        return (
            <React.Fragment>
                <div>
                    <Modal isOpen={this.state.showNoteModal} toggle={this.toggleNote}>
                        <form onSubmit={this.addNote}>
                        <ModalHeader toggle={this.toggleNote}>New Note</ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <textarea className="form-control" id="noteContent" rows="3" name="note" onChange={this.handleChange}></textarea>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="primary">Save</Button>{' '}
                            <Button color="secondary" onClick={this.toggleNote}>Cancel</Button>
                        </ModalFooter>
                        </form>
                    </Modal>
                </div>

                <div>
                    <Modal isOpen={this.state.showCommunicationModal} toggle={this.toggleCommunication} className={this.props.className}>
                        <form onSubmit={this.addCommunication}>
                        <ModalHeader toggle={this.toggleCommunication}>New Communication</ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <select id="medium" className="custom-select" name="medium" onChange={this.handleChange}>
                                    <option defaultValue={true}>Pick Medium</option>
                                    <option value="email">SMS</option>
                                    <option value="sms">Email</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select id="sender" className="custom-select" name="from" onChange={this.handleChange}>
                                    <option defaultValue={true}>Pick Sender</option>
                                    <option value="exclipx">Eclipx</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="recipient" placeholder="Enter Recipient" name="to" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="noteContent" rows="3" name="body" placeholder="Message Content" onChange={this.handleChange}></textarea>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" onClick={this.toggleCommunication}>Cancel</Button>
                        </ModalFooter>
                        </form>
                    </Modal>
                </div>

                {automatic ? <div className="alert alert-danger">This Recall Was Automatically Identified. <br/>Automatically Identified Recalls Might Manifest Malformed Data.</div> : null }<br/>
                {this.state.removed ? <div className="alert alert-success">Successfully Deleted</div> : null }<br/>
                <h1>Recall #{this.state.id}</h1>
                <div className="recall-single">
                    <button className="btn btn-default" data-toggle="modal" data-target="addNote" onClick={this.toggleNote}>Add Note</button>
                    <button className="btn btn-default" data-toggle="modal" data-target="addCommunication" onClick={this.toggleCommunication}>Add Communication</button>
                    <Link className="btn btn-dark" to={`/edit/recall/${this.state.id}`}>Edit Recall</Link>
                    <button className="btn btn-danger" onClick={this.deleteRecall} disabled={this.state.removed}>Delete Recall</button>
                    <hr/>
                    <div className="row">
                    <div className="col custodian-information">
                        <h2>Custodian</h2>
                        <div className="list-group">
                            <a href="#"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Individual:</h5>
                                </div>
                                <p className="mb-1"><b>Name:</b> {data.custodian.name ? data.custodian.name : 'N/A'}</p>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Contact Details</h5>
                                </div>
                                <p className="mb-1">
                                    <b>Email:</b> {data.custodian.email ? data.custodian.email : 'N/A'}<br/>
                                    <b>Phone:</b> {data.custodian.contactNumber ? data.custodian.contactNumber : 'N/A'}
                                </p>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Organization</h5>
                                </div>
                                <p className="mb-1">
                                    <b>Organization:</b> {data.custodian.organization ? data.custodian.organization : 'N/A'}<br/>
                                    <b>Organization Email:</b> {data.custodian.organizationEmail ? data.custodian.organizationEmail : 'N/A'}<br/>
                                    <b>Organization Phone:</b> {data.custodian.organizationPhone ? data.custodian.organizationPhone : 'N/A'}
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="col vehicle-information">
                        <h2>Vehicle</h2>
                        <div className="list-group">
                            <a href="#"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Manufacturing Details</h5>
                                </div>
                                <p className="mb-1">
                                    <b>Manufacturer:</b> {data.vehicle.manufacturer ? data.vehicle.manufacturer : 'N/A'}<br/>
                                    <b>Model:</b> {data.vehicle.model ? data.vehicle.model : 'N/A'}<br/>
                                    <b>Make:</b> {data.vehicle.make ? data.vehicle.make : 'N/A'}<br/>
                                    <b>Year:</b> {data.vehicle.year ? data.vehicle.year : 'N/A'}
                                </p>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Vehicle Details</h5>
                                </div>
                                <p className="mb-1">
                                    <b>Registration:</b> {data.vehicle.registration ? data.vehicle.registration : 'N/A'}<br/>
                                    <b>Vehicle ID:</b> {data.vehicle.vehicleID ? data.vehicle.vehicleID : 'N/A'}<br/>
                                    <b>Vehicle Identification Number (VIN):</b> {data.vehicle.vin ? data.vehicle.vin : 'N/A'}<br/>
                                    <b>Vehicle Description:</b> {data.vehicle.description ? data.vehicle.description : 'N/A'}
                                </p>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Notes</h2>
                            <div className="col note-information">
                                <div className="list-group">
                                    {this.generateNotes()}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h2>Communications</h2>
                            <div className="col communication-information">
                                <div className="list-group">
                                    {this.generateCommunications()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RecallDrilled;