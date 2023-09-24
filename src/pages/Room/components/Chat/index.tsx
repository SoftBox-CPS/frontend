import React from 'react';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import Loader from 'components/Loader';
import MessageContainer from './components/MessageContainer';
import OptionsButton from './components/OptionsButton';
import SendButton from './components/SendButton';
import styles from './Chat.module.scss';

type UserMessageModel = {
  userId: string;
  message: string;
  created: string;
};

type ChatInfoApiModel = {
  roomId: string;
  myUserId: string;
  chatMessages: UserMessageModel[];
}

type ChatInfoModel = {
  roomId: string;
  myUserId: string;
}

const Chat: React.FC<{roomId: string}> = ({roomId}) => {
  let [chatInfo, setChatInfo] = React.useState<undefined | ChatInfoModel>();
  let [chatMessages, setChatMessages] = React.useState<UserMessageModel[]>([]);

  let [chatConnection, setChatConnection] = React.useState<undefined | HubConnection>();
  let [chatIsLoad, setChatIsLoad] = React.useState(false);
  
  let chatContainer = React.useRef(null);

  let [message, setMessage] = React.useState('');

  const handleClickOptionButton = async () => {
    
  };

  const handleClickSendButton = async () => {
    await chatConnection?.invoke('SendMessage', roomId, message)
      .catch(err => console.log(err));

    setMessage('');
  };

  const handleChangeMessage = (e: React.FormEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  const fetchChatInfo = async () => {
    const response = await fetch(`/api/Chat/${roomId}`);

    const data: ChatInfoApiModel = await response.json();

    setChatInfo(data);
    setChatMessages(data.chatMessages)
  };

  const connectToChat = () => {
    const connection = new HubConnectionBuilder()
      .withUrl('http://93.189.82.184/api/chathub')
      .withAutomaticReconnect()
      .build()

    connection.on('ReceiveMessage', (user, message, date) => {
      // TODO: обновление при получении сообщений, проблема потери контекста
    });

    setChatConnection(connection);
  };

  React.useEffect(() => {
    fetchChatInfo();
    connectToChat();

    return () => {
      chatConnection?.stop();
      setChatConnection(undefined);
    }
  }, []);

  React.useEffect(() => {
    chatConnection?.start()
      .then(() => {
        chatConnection?.invoke('EnterChat', roomId);
        setChatIsLoad(true);
      })
      .catch((err) => console.error(err));
  }, [chatConnection]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Связаться с поставщиком</h3>
      </div>

      <div ref={chatContainer} className={styles.content}>
        {
          // TODO: сделать прокрутку к последнему сообщению
          chatIsLoad ? 
            chatMessages?.map((item, idx) => 
              <MessageContainer key={idx} name={item.userId} message={item.message} owner={item.userId === chatInfo?.myUserId} />
            ) : 
            <div className={styles.loader}><Loader /></div>
        }
      </div>

      <div className={styles.input_container}>
        <OptionsButton onClick={handleClickOptionButton} />
        <input className={styles.input} placeholder='Ваше сообщение' onChange={handleChangeMessage} value={message}/>
        <SendButton onClick={handleClickSendButton} disabled={chatIsLoad ? false : true}/>
      </div>
    </div>
  );
};

export default Chat;
