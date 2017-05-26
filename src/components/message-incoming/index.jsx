import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const MessageIncoming = ({ message }) => (
  <li className={styles.message_incoming}><span>{new Date(message.date).toLocaleString()}</span>{message.message}</li>
);

MessageIncoming.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
  }).isRequired,
};

export default MessageIncoming;
