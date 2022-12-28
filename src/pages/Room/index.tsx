import React from 'react';
import Chat from './components/Chat';

import styles from './Room.module.scss';

const Room: React.FC = () => {
  return (
    <div className={styles.container}>
      <Chat />
    </div>
  );
};

export default Room;
