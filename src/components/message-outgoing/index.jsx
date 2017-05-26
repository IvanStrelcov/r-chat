import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const MessageOutgoing = ({ message }) => (
  <li className={styles.message_outgoing}><span>{new Date(message.date).toLocaleString()}</span>{message.message}</li>
);

MessageOutgoing.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
  }).isRequired,
};

export default MessageOutgoing;
