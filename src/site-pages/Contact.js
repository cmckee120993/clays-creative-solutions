import React from 'react';
import '../styles/contact.css';
import {useForm, ValidationError} from '@formspree/react';


function Contact() {
    const [state, handleSubmit] = useForm('xyyakgly');

    if (state.succeeded) {
        <div className='success-message'>
            <p>
                Thanks for your message! Clay will get back to you as soon as possible.
                To send another message, return to the <a href='/contact'>Contact Page</a> 
                or return to the <a href='/'>Home Page</a>. 
            </p>
        </div>
    }
    return (
        <>
            <h2 className='contact-title'>Contact Me</h2>

            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='contact-form-div'>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' name='name'/>
                </div>
                <div className='contact-form-div'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' name='email'/>
                </div>
                <div className='contact-form-div'>
                    <label htmlFor='message'>Message</label>
                    <textarea className='textarea' name='message' rows='10'/>
                </div>
                <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                />
                <div className='contact-form-div'>
                    <button type='submit' disabled={state.submitting}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
};

export default Contact;