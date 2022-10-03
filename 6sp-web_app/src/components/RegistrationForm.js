import { useRef } from 'react';

import Card from './Card';

import classes from './Form.module.css';

function RegistrationForm(props){

    const dinInputRef = useRef();
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const cpasswordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredDin = dinInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredCpassword = cpasswordInputRef.current.value;

        const registerData = {
            din: enteredDin,
            name: enteredName,
            email: enteredEmail,
            username: enteredUsername,
            password: enteredPassword,
            cpassword: enteredCpassword,
        };

        props.onRegister(registerData);

        //console.log(registerData);
    }

    return (
        <Card>
            <h1 className={classes.h1}>REGISTER</h1>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='din'>Doctor Identification Number</label>
                    <input type='text' required id='din' ref={dinInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' required id='name' ref={nameInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='text' required id='email' ref={emailInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' required id='username' ref={usernameInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' required id='password' ref={passwordInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='cpassword'>Confirm Password</label>
                    <input type='password' required id='cpassword' ref={cpasswordInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Register</button>
                </div>
            </form>
        </Card>
    ); 
}

export default RegistrationForm;