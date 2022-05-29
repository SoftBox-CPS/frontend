import React, {Component} from 'react';
import roomBlock from "./roomBlock";

function RoomList(props){
    const {rooms} = props;
    var room_blocks = [];
    rooms.forEach(function (room) {
        room_blocks.push(roomBlock(room));
    })
    return(
        <div className="container">
            <h1>Лист румов</h1>
            {room_blocks}
        </div>
    );
}

export default RoomList;
