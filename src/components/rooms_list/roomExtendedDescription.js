import './roomList.css';
import React, {Component} from 'react';

class RoomExtendedDescription extends Component {

    render() {
        const {info} = this.props;
        return(
            <div className="m-3">
                <hr />
                <div className="card-title">
                    <h5>{info.title}</h5>
                </div>
                <div className="card-subtitle mb-2 text-muted">May be some info</div>
                <div className="card-text card-inner">
                    <p>{info.info}</p>
                </div>
            </div>
        );
    }
}

export default RoomExtendedDescription;