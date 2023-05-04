import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


function Signup(props) {
    const [ formState, setFormState ] = useState({ email: '', password: ''});
    const [ addUser ] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser ({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
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
            <h2 className='title'>Signup</h2>

            <form onSubmit={handleFormSubmit}>
                <div className='form-div'>
                    <label className='label' htmlFor='firstName'>First Name:</label>
                    <input
                        className='input'
                        placeholder='First'
                        name='firstName'
                        type='firstName'
                        id='firstName'
                        onChange={handleChange}
                    />
                </div>

                <div className='form-div'>
                    <label className='label' htmlFor='lastName'>Last Name:</label>
                    <input
                        className='input'
                        placeHolder='Last'
                        name='lastName'
                        type='lastName'
                        id='lastName'
                        onChange={handleChange}
                    />
                </div>

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
                    <label className='label' htmlFor='email'>Password:</label>
                    <input 
                        className='input'
                        placeholder='*****'
                        name='password'
                        type='password'
                        id='password'
                        onChange={handleChange}
                    />
                </div>

                <div className='button-div'>
                    <button className='button' type='submit'>Submit</button>
                </div>

                <div className='link-div'>
                    <Link to='/login'>Already have an accout? Login!</Link>
                </div>
            </form>
        </>
    );
};

export default Signup;