import React from 'react';
import { useState} from 'react';

export default function SimpleInput() {
    const [enteredLogin, setEnteredLogin] = useState('');
    const [enteredLoginIsValid, setEnteredLoginIsValid] = useState('false');
    const [enteredLoginIsTuched, setEnteredLoginIsTuched] = useState('false');
    // const [enteredPassInput, setEnteredPassInput] = useState('');
    // const [enteredPassInputIsValid, setEnteredPassInputIsValid] = useState('false');

    const loginInputChangeHandler = e => {
        setEnteredLogin(e.target.value)
    }
    // const loginPassChangeHandler = e => {
    //     setEnteredPassInput(e.target.value)
        
    // }

    const formSubmissionHandler = e => {
        setEnteredLoginIsTuched(true)
        e.preventDefault();
        if (enteredLogin.trim() === "") {
            setEnteredLoginIsValid(false)
            return
        }
        // if (enteredPassInput.trim() === "") {
        //     setEnteredPassInputIsValid(false)
        //     return
        // }
        setEnteredLoginIsValid(true)
        // setEnteredPassInputIsValid(true)

        console.log(enteredLogin)
        // console.log(enteredPassInput)

        setEnteredLogin('');
        // setEnteredPassInput('');
    }
    const loginIsInvalid = !enteredLoginIsValid & enteredLoginIsTuched
    const nameInputClasses = loginIsInvalid 
    // && enteredPassInput 
    ? 'form-control invalid' : 'form-control'
    
  return (
    <form onSubmit={formSubmissionHandler}>
    <div className={nameInputClasses}>
      <label htmlFor='login'>Your Login</label>
      <input type='text' 
      id='login' 
      onChange={loginInputChangeHandler}
      value={enteredLogin}
      />
      {/* <label htmlFor='pass'>Your Password</label>
      <input type='text' 
      id='pass'
       onChange={loginPassChangeHandler}
        value={enteredPassInput}
       /> */}
    </div>
    <div className="form-actions">
      <button>Submit</button>
    </div>
    {loginIsInvalid && <p className='error-login'>please type something in login field</p> || <p></p>}
    {/* {!enteredPassInputIsValid && <p className='error-password'>please type something in password field</p>} */}
  </form>
  )
}
