import React from 'react';
import styles from './styles.css';

const ChatFooter = () => (
  <div className={styles.chat_footer}>
    <textarea placeholder="Write a message..." className={styles.input_field} />
  </div>
);

export default ChatFooter;
