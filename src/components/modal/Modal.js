import React from 'react';
import './Modal.css';

const Modal = ({ show, close,data }) => {
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateX(0vh)' : 'translateX(-500vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Brewery</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>{data.name}</h4>
          <ul>
            <li>Brewery Type: {data.brewery_type}</li>
            <li>City: {data.city}</li>
            <li>State: {data.state}</li>
            <li>Zip code: {data.postal_code}</li>
          </ul>
        </div>
        <div className="modal-footer">

        </div>
      </div>
    </div>
  )
};

export default Modal;