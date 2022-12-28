import React from 'react';

import styles from './MessageContainer.module.scss';

type MessageContainerProps = {
  name: string;
  message: string;
  owner?: boolean;
};

const MessageContainer: React.FC<MessageContainerProps> = ({
  name,
  message,
  owner,
}) => {
  const classNames = {
    container: owner ? styles.container_right : styles.container_left,
    title: owner ? styles.title_right : styles.title_left,
    message: owner ? styles.message_right : styles.message_left,
  };

  return (
    <div className={classNames.container}>
      <div className={classNames.title}>
        <svg
          width='26'
          height='8'
          viewBox='0 0 26 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            transform: owner ? 'scale(-1, -1)' : '',
            marginLeft: owner ? '20px' : '',
          }}
        >
          <path
            d='M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5H25V3.5H0V4.5Z'
            fill='#A4A4A4'
          />
        </svg>
        <p className={styles.name}>{name}</p>
      </div>
      <div
        className={classNames.message}
        style={{ backgroundColor: owner ? '#71CEF0' : '#A4A4A4' }}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageContainer;
