import React from 'react';
import './style.css';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';


function Create() {

    const [ addPost ] = useMutation(ADD_POST);

    function submitPost() {
        let titleEn = document.querySelector(".title-english").value;
        let textEn = document.querySelector(".post-english").value;
        let titleFr = document.querySelector(".title-french").value;
        let textFr = document.querySelector(".post-french").value;
        
        addPost({
            variables: {
                englishPost: textEn,
                frenchPost: textFr,
                title: titleEn,
                titleFr: titleFr
            }
        });
        document.location.reload();
    }
    
    return (
        <>

            <h2 className='title'>Create a Post</h2>
            
            <h3 className='label'>English Title</h3>
            <input className='input title-english'></input>

        
            <div className='post-div'>
                <h3 className='label'>English Post</h3>
                <textarea className='post post-english'></textarea>
            </div>

            <h3 className='label'>French Title</h3>
            <input className='input title-french'></input>

            <div className='post-div'>
                <h3 className='label'>French Post</h3>
                <textarea className='post post-french'></textarea>
            </div>

            <div className='button-div'>
                <button onClick={submitPost} className='button'>Submit</button>
            </div>
        </>
    )
};

export default Create;


