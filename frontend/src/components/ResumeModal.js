import React from 'react';

import { Button, Modal } from 'react-bootstrap';

const ResumeModal = props => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>email: {props.email}</p>
                <p>Mobile No: {props.mobile}</p>
                <p>Experience: {props.experience}</p>
                <p>College: {props.college}</p>
                <p>Company: {props.company}</p>
                <p>Degree: {props.degree}</p>
                <p>Designation: {props.designation}</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ResumeModal;
