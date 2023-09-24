import React from 'react';

import styles from './Rooms.module.scss';
import { NavLink } from 'react-router-dom';

type RoomModel = {
  amountProduct: number;
  description: null | string;
  expirationDate: string;
  id: string;
  name: string;
  price: number;
  productId: string;
  roomStatusId: number;
};

const Rooms: React.FC = () => {
  let [roomList, setRoomList] = React.useState<null | RoomModel[]>(null);

  React.useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('/api/Chat/AllMyChat');

        const json = await response.json();
        setRoomList(json);
      } catch(err: any) {
        console.error(err);
      }
    };

    fetchRooms();
  }, [])
  
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {
          roomList?.map((item, idx) => {
            return (
              <li key={idx} className={styles.item}>
                <p>{item.name}</p>
                <p>{item.id}</p>
                <NavLink 
                  to='/Room'
                  state={{roomId: item.id}}
                >
                  Go to Room
                </NavLink>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Rooms;