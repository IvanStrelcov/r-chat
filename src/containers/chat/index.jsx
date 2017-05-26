import React from 'react';
import styles from './styles.css';

import ChatHeader from '../../components/chat-header';
import ChatContent from '../../components/chat-content';
import ChatFooter from '../../components/chat-footer';
import Login from '../../components/login';

const xxx = false;
const Chat = () => (
  <div className={styles.chat}>
    {
      xxx
      ? <div>
        <ChatHeader />
        <ChatContent />
        <ChatFooter />
      </div>
      : <Login />
    }
  </div>
);

export default Chat;
