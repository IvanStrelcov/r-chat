import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.css';

import MessagesList from '../messages-list';

const ChatContent = ({ messages }) => (
  <div className={styles.chat_content}>
    <MessagesList messages={messages} />
  </div>
);

ChatContent.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  ({ messages }) => ({ messages }),
)(ChatContent);
