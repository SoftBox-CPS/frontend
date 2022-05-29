import React, {Component} from 'react';
import RoomList from "./roomList";
import RoomExtendedDescription from "./roomExtendedDescription";
import './roomBlock.css'
import {Card, CardImg} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

function roomBlock(room_info){
    return(
        <RoomBlock room_info={room_info}/>
    );
}

class RoomBlock extends Component {
    state = {
        isOpen: false
    }

    render() {
        const {room_info} = this.props;
        const body = this.state.isOpen && <RoomExtendedDescription info={room_info} />
        return(
            <Card className="my-3">
                <CardHeader>
                    <img className="logo_img float-left" src={process.env.PUBLIC_URL + room_info.img} alt="lorem" />
                    <div className="info_header mx-3">
                        <a href="#">
                            <h4>{room_info.title}</h4>
                        </a>
                        <p className="card-subtitle text-muted">Дата начала: {(new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric", weekday: "long"}).format(new Date(room_info.date)).replace(/(\s?\г\.?)/, ""))}</p>
                    </div>
                    <button className="btn info_header m-0 py-0" onClick={this.handleClick} id={room_info.id}>
                        <i className={this.state.isOpen ? "fa fa-duotone fa-angle-double-up m-0" : "fa fa-duotone fa-angle-double-down m-0"}></i>
                    </button>
                    <div className="card-body card-wrapper p-0">
                        {body}
                    </div>
                </CardHeader>
            </Card>
        );
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default roomBlock;