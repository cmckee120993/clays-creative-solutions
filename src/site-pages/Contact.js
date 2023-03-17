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
        <div className='contact-content'>
            <h2 className='contact-title'>Contact Me</h2>
            <div className='contact-div'>
                <div className='general-contact'>
                    <p className='contact-des'>
                        I am currently based in Nice, France; however, I accept clients from all over the globe!
                        All prices are based on the USD; however, prices will be converted and made compatible 
                        for going rates wherever you may be in the world. Best way to know a price is to get in
                        touch.
                    </p>
                    <div className='contact-card'>
                        <p className='link'>Email: 
                            <a href='mailto:clayscreativesolutions@gmail.com' target='_blank' rel='noreferrer'>
                                clayscreativesolutions@gmail.com
                            </a>
                        </p>
                        <p className='link'>Phone: 
                            <a href='tel:+33769777978' target='_blank' rel='noreferrer'>
                                +33 7 69 77 79 78
                            </a>
                        </p>
                    </div>
                </div>
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
            </div>
        </div>
    )
};

export default Contact;