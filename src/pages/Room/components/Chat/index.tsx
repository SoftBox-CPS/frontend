import React from 'react';
import MessageContainer from './components/MessageContainer';
import OptionsButton from './components/OptionsButton';
import SendButton from './components/SendButton';

import styles from './Chat.module.scss';

const Chat: React.FC = () => {
  const onClickOptionsButton = () => {};

  const onClickSendButton = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Связаться с поставщиком</h3>
      </div>

      <div className={styles.content}></div>

      <div className={styles.input_container}>
        <OptionsButton onClick={onClickOptionsButton} />
        <input className={styles.input} placeholder='Ваше сообщение' />
        <SendButton onClick={onClickSendButton} />
      </div>
    </div>
  );
};

export default Chat;
