import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {

  const contactStyle = {
    backgroundColor: '#F5EFFF', 
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '575px'
  }
  
  const inputStyle = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    borderRadius: '4px'
  }
  
  const buttonStyle = {
    backgroundColor: '#4CAF50', 
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'
  }

  // Create state variables for the fields in the form
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputEmail, setInputEmail] = useState(false);
  const [inputName, setInputName] = useState(false);
  const [inputMessage, setInputMessage] = useState(false);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    // Based on the input type, we set the state of either email, username, and password
    if (name === 'email') {
      setEmail(value);
      const isValid = validateEmail(value);
      setErrorMessage(isValid ? '' : 'Email is not valid.');
    } else if (name === 'name') {
      setName(value);
      setErrorMessage(value ? '' : 'Please enter a name.');
    } else {
      setMessage(value);
      setErrorMessage(value ? '' : 'Message cannot be empty.');
    }
  };

  const blurredEmail = () => {
    setInputEmail(true)
  }

  const focusedEmail = () => {
    setInputEmail(false)
  }

  const blurredName = () => {
    setInputName(true)
  }

  const focusedName = () => {
    setInputName(false)
  }

  const blurredMessage = () => {
    setInputMessage(true)
  }

  const focusedMessage = () => {
    setInputMessage(false)
  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // Check to see that an email has been entered and is valid
    const isValid = validateEmail(email);
    if (!isValid) {
      setErrorMessage('Email is not valid.');
      return;
    }
    // Check if a username has been entered
    if (!name) {
      setErrorMessage('Please enter a name.');
      return;
    }
    // Check that a message has been entered into the form
    if (!message.length) {
      setErrorMessage('Message cannot be empty.');
      return;
    }
    // After a successful submission, we want to clear the contact form
    setEmail('');
    setInputEmail(false);
    setName('');
    setInputName(false);
    setMessage('');
    setInputMessage(false);
    alert(`Thank you for the message ${name}`)
  };

  return (
    <div style={contactStyle}>
    <form onSubmit={handleFormSubmit}>
      <input
      style={inputStyle}
        value={email}
        name='email'
        onChange={handleInputChange}
        type='email'
        placeholder='Email'
        onFocus={focusedEmail}
        onBlur={blurredEmail}
        required
      />
      {!email && inputEmail &&  <p>This field is required</p>}
      <input
      style={inputStyle}
        value={name}
        name='name'
        onChange={handleInputChange}
        type='text'
        placeholder='Name'
        onFocus={focusedName}
        onBlur={blurredName}
        required
      />
      {!name && inputName &&  <p>This field is required</p>}
        <textarea
        style={inputStyle}
        value={message}
        name='message'
        onChange={handleInputChange}
        type='text'
        placeholder='Enter message here.'
        rows={6}
        onFocus={focusedMessage}
        onBlur={blurredMessage}
        required
        />
            {!message && inputMessage &&  (
              <div>
                <p>This field is required</p>
              </div>
            )}
                <button 
                style={buttonStyle}
                type='submit'
                className='block w-full rounded-md bg-regal-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5'
              >
                Submit
              </button>
            </form>
            {errorMessage && (
              <div>
                <p className='error-text'>{errorMessage}</p>
              </div>
            )}
          </div>
        );
    }