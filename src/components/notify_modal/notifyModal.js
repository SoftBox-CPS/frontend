import React from 'react';
import './notifyModal.css';
import {Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";

function NotifyModal(props) {
    const {message} = props;
    return(
        <Modal
               show = {props.show}
               backdrop="static"
               keyboard={false}
               onHide={props.onClose()}
               centered>
            <ModalHeader className={message.status} closeButton>
                <ModalTitle>
                    <Row>
                        <Col xs lg="2">
                            <FontAwesomeIcon className={message.status + "_icon"} icon={message.status === "success" ? faCircleCheck : faCircleExclamation}/>
                        </Col>
                        <Col md="auto">
                            {message.title}
                        </Col>
                    </Row>
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <span>{message.info}</span>
            </ModalBody>
            <ModalFooter>
                <Button className="btn btn-info" onClick={props.onClose()}>
                    Закрыть
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default NotifyModal;



