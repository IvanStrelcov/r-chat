import React from 'react';
import styles from './styles.css';

const Login = () => (
  <div className={styles.login_form}>
    <input type="text" className={styles.form_control} placeholder="Enter your email" />
    <input type="password" className={styles.form_control} placeholder="Enter your password" />
    <input type="submit" className={styles.form_submit} value="Login" />
  </div>
);

Login.propTypes = {
};

export default Login;
