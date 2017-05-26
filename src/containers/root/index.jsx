import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Root = ({ children }) => (
  <div className={styles.root}>
    <div>{children}</div>
  </div>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
