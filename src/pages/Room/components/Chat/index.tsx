import React from 'react';
import MessageContainer from './components/MessageContainer';
import OptionsButton from './components/OptionsButton';
import SendButton from './components/SendButton';
import styles from './Chat.module.scss';
import Loader from 'components/Loader';

import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

type MessageModel = {
  user: string
  message: string
  date: string
}

const Chat: React.FC<{roomId: string}> = ({roomId}) => {
  let [connectionRef, setConnectionRef] = React.useState<null | HubConnection>(null);
  let [isLoad, setIsLoad] = React.useState(true);

  let [message, setMessage] = React.useState<string>("");
  let [messages, setMessages] = React.useState<{user: string, message: string, date: string}[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value) 
  }
  
  const onClickOptionsButton = async () => {
    let response = await fetch('/api/api/getAll', {
      method: 'GET'
    })

    console.log(response.url)

    if (response.ok) {
      let json = await response.json()
      console.log(json)
    } else {
      alert('Ошибка HTTP: ' + response.status)
    }
  };

  const onClickSendButton = async () => {
    if (message.trim().length !== 0)
      await connectionRef?.invoke('SendMessage', roomId, message)
        .catch((err: any) => {
          console.error(err);
        }) 
  };

  React.useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl('/api/api/chathub')
      .withAutomaticReconnect()
      .build();

    setConnectionRef(connection);
  }, [])

  React.useEffect(() => {
    connectionRef?.start()
      .then((data) => {
        connectionRef?.invoke('EnterChat', roomId);
      })
      .catch((err: any) => {
        console.error(err)
      })
      .finally(() => {
        setIsLoad(false)
      })
  }, [connectionRef])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Связаться с поставщиком</h3>
      </div>

      <div className={styles.content}>
        {isLoad ? 
          <div className={styles.loader}><Loader /></div> : 
          messages.map((value, index) => {
          return <MessageContainer key={index} name={value.user} message={value.message} />
        })}
      </div>

      <div className={styles.input_container}>
        <OptionsButton onClick={onClickOptionsButton} />
        <input className={styles.input} placeholder='Ваше сообщение' onChange={handleChange}/>
        <SendButton onClick={onClickSendButton} />
      </div>
    </div>
  );
};

export default Chat;
