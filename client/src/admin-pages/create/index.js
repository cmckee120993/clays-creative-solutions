import React from 'react';
import './style.css';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';


function Create() {

    const [ addPost ] = useMutation(ADD_POST);

    function submitPost() {
        let titleEn = document.querySelector(".title-english").value;
        let parOneEn = document.querySelector(".par-one-en").value;
        let parTwoEn = document.querySelector('.par-two-en').value;
        let titleFr = document.querySelector(".title-french").value;
        let parOneFr = document.querySelector(".par-one-en").value;
        let parTwoFr = document.querySelector('.par-two-en').value;
        let imgOne = document.querySelector('.img-one').value;
        let imgTwo = document.querySelector('.img-two').value;
        
        addPost({
            variables: {
                parOneEn: parOneEn,
                parTwoEn: parTwoEn,
                parOneFr: parOneFr,
                parTwoFr: parTwoFr,
                title: titleEn,
                titleFr: titleFr,
                imgOne: imgOne,
                imgTwo: imgTwo,
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
                <h3 className='label'>English Paragraph 1</h3>
                <textarea className='post par-one-en'></textarea>
            </div>

            <div className='post-div'>
                <h3 className='label'>English Paragraph 2</h3>
                <textarea className='post par-two-en'></textarea>
            </div>

            <h3 className='label'>French Title</h3>
            <input className='input title-french'></input>

            <div className='post-div'>
                <h3 className='label'>French Post</h3>
                <textarea className='post par-one-fr'></textarea>
            </div>

            <div className='post-div'>
                <h3 className='label'>French Paragraph 2</h3>
                <textarea className='post par-two-fr'></textarea>
            </div>

            <h3 className='label'>Image 1 Link</h3>
            <input className='input img-one'></input>

            <h3 className='label'>Image 2 Link</h3>
            <input className='input img-two'></input>

            <div className='button-div'>
                <button onClick={submitPost} className='button'>Submit</button>
            </div>
        </>
    )
};

export default Create;


