import React,{useState} from 'react'

import './MoreInfo.css'

import Modal from '../modal/Modal'

function MoreInfo({data}) {
    const [show, setShow] = useState(false);

    const closeModalHandler = () => setShow(false);
    return (
        <div className="list">
            
      { show ? <div onClick={closeModalHandler}></div> : null }
      <button onClick={() => setShow(true)} className="btn-openModal">{data.name}</button>
      <Modal data={data} show={show} close={closeModalHandler} />
    </div>
    );
}

export default MoreInfo
