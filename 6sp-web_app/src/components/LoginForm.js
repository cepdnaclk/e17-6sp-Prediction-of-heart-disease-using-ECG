import { useRef } from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';

import classes from './Form.module.css';

function LoginForm(props){

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const loginData = {
            username: enteredUsername,
            password: enteredPassword,
        };

        props.onLogin(loginData);

        // console.log(loginData);
    }

    return (
        <Card>
            <h1 className={classes.h1}>LOGIN</h1>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' required id='username' ref={usernameInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input type='text' required id='password' ref={passwordInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Login</button>
                </div>
                <div className={classes.text}>
                    <Link to="" className={classes.text}>Forgot Password</Link>
                </div>
            </form>
        </Card>
    ); 
}

export default LoginForm;