import React, {useState} from "react";
import NotifyModal from "./notifyModal";
import './notifyModal.css'
import {Button} from "react-bootstrap";

function DemoModal(props){
    const {message} = props;
    const [show, setShow] = useState(false);
    const handleShowModal = () => {
        setShow(true)
    };
    const handleCloseModal = () => setShow(false);
    return(
        <div>
            <Button className="info" onClick={handleShowModal}>Modal</Button>
            {show && <NotifyModal message={message} show={show} onClose={() => handleCloseModal}/>}
        </div>
    );
}

export default DemoModal;