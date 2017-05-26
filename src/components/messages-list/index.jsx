import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

import MessageIncoming from '../message-incoming';
import MessageOutgoing from '../message-outgoing';

import chat from '../../services/socket';

chat.on('new', (response) => {
  console.log(response);
});
const MessagesList = ({ messages }) => {
  const messagesList = messages.map((message) => {
    if (message.user_id === 1) {
      return <MessageIncoming key={message.id} message={message} />;
    }
    return <MessageOutgoing key={message.id} message={message} />;
  });
  return (<div className={styles.messages_list}>
    <ul className="list">
      { messagesList }
    </ul>
  </div>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MessagesList;
