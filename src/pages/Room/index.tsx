import React from 'react';
import { useLocation } from 'react-router-dom';
import Chat from './components/Chat';
import styles from './Room.module.scss';

const Room: React.FC = () => {
  const location = useLocation();
  const { roomId } = location.state;
  
  return (
    <div className={styles.container}>
      <Chat roomId={roomId} />
    </div>
  );
};

export default Room;
