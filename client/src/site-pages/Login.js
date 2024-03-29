import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';


function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: {email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (error) {
            console.log(error)
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <>
            <h2 className='title'>Login</h2>

            <form onSubmit={handleFormSubmit}>
                <div className='form-div'>
                    <label className='label' htmlFor='email'>Email:</label>
                    <input 
                        className='input'
                        placeholder='youremail@example.com'
                        name='email'
                        type='email'
                        id='email'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-div'>
                    <label className='label' htmlFor='pwd'>Password:</label>
                    <input
                        className='input'
                        placeholder='*****'
                        name='password'
                        type='password'
                        id='password'
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p>The provided credentials are incorrect...</p>
                    </div>
                ) : null}
                <div className='button-div'>
                    <button className='button' type='submit'>Submit</button>
                </div>
            </form>
            <div className='link-div'>
                <Link to='/signup'>No account? Signup now!</Link>
            </div>
        </>
    );
};

export default Login;