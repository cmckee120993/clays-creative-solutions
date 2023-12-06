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
            <h2 className='title'>Contact Me</h2>
            <div className='contact-div'>
                <div className='general-contact'>
                    <p className='contact-des'>
                        I am currently based in Carlisle, Pennsylvania; however, I accept clients from all over the globe!
                        I follow industry standards in the United States for pricing, but I strive to work with small business
                        and individual budgets. The best way to get an accurate estimate for your project is to reach out!
                    </p>
                    <div className='contact-card'>
                        <p className='link'>Email: 
                            <a href='mailto:clayscreativesolutions@gmail.com' target='_blank' rel='noreferrer'>
                                clayscreativesolutions@gmail.com
                            </a>
                        </p>
                        <p className='link'>Phone: 
                            <a href='tel:+17179616283' target='_blank' rel='noreferrer'>
                                +1 (717) 961-6283
                            </a>
                        </p>
                    </div>
                </div>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='form-div'>
                        <label className='label' htmlFor='name'>Name</label>
                        <input className='input' id='name' type='text' name='name'/>
                    </div>
                    <div className='form-div'>
                        <label className='label' htmlFor='email'>Email</label>
                        <input id='email' className='input' type='email' name='email'/>
                    </div>
                    <div className='form-div'>
                        <label className='label' htmlFor='message'>Message</label>
                        <textarea className='textarea' name='message' rows='10'/>
                    </div>
                    <ValidationError
                        prefix='Message'
                        field='message'
                        errors={state.errors}
                    />
                    <div className='button-div'>
                        <button className='button' type='submit' disabled={state.submitting}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Contact;