import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
        <h2>Login Page</h2>
        <button className='my-btn'>Submit</button>

        <button className={classes.myBtn}>Scoped CSS</button>

    </div>
  )
}

export default Login;