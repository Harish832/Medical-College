import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = (props) => {
    const data=props.data;
    const [show, setShow] = useState(false);
    const handleShow=()=>setShow(true);
    const handleClose = () => setShow(false); 
    return (
      <> 
        <Button variant="primary" onClick={handleShow}>
            {data.type}
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{data.display}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {data.message}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default CustomModal