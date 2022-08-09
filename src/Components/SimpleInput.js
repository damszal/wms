import React from 'react';
import { useState} from 'react';

export default function SimpleInput() {
    const [enteredLogin, setEnteredLogin] = useState('');
    const [enteredLoginIsValid, setEnteredLoginIsValid] = useState('true');
    const [enteredPassInput, setEnteredPassInput] = useState('');
    const [enteredPassInputIsValid, setEnteredPassInputIsValid] = useState('true');

    const loginInputChangeHandler = e => {
        setEnteredLogin(e.target.value)
    }
    const loginPassChangeHandler = e => {
        setEnteredPassInput(e.target.value)
        
    }

    const formSubmissionHandler = e => {
        e.preventDefault();
        if (enteredLogin.trim() === "") {
            setEnteredLoginIsValid(false)
            return
        }
        if (enteredPassInput.trim() === "") {
            setEnteredPassInputIsValid(false)
            return
        }
        setEnteredLoginIsValid(true)
        setEnteredPassInputIsValid(true)

        console.log(enteredLogin)
        console.log(enteredPassInput)

        setEnteredLogin('');
        setEnteredPassInput('');
    }

    const formIsValid = enteredLogin && enteredPassInput ? 'form-control' : 'form-control invalid'
    
  return (
    <form onSubmit={formSubmissionHandler}>
    <div className={formIsValid}>
      <label htmlFor='login'>Your Login</label>
      <input type='text' 
      id='login' 
      onChange={loginInputChangeHandler}
      value={enteredLogin}
      />
      <label htmlFor='pass'>Your Password</label>
      <input type='text' 
      id='pass'
       onChange={loginPassChangeHandler}
        value={enteredPassInput}
       />
    </div>
    <div className="form-actions">
      <button>Submit</button>
    </div>
    {!enteredLoginIsValid && <p className='error-login'>please type something in login field</p>}
    {!enteredPassInputIsValid && <p className='error-password'>please type something in password field</p>}
  </form>
  )
}
