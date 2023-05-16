import React from 'react';
import './style.css';


// import { Editor } from 'react-draft-wysiwyg';
// import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function Create() {

    function submit() {
        let text = document.querySelector(".post").value;
        console.log(text);
    }
    
    return (
        <>
            {/* <Editor 
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
            /> */}

            <h2 className='title'>Create a Post</h2>
            
            <h3 className='label'>English Title</h3>
            <input className='input titleEn'></input>

        
            <div className='post-div'>
                <h3 className='label'>English Post</h3>
                <textarea className='post'></textarea>
            </div>

            <h3 className='label'>French Title</h3>
            <input className='input titleFr'></input>

            <div className='post-div'>
                <h3 className='label'>French Post</h3>
                <textarea className='post'></textarea>
            </div>

            <div className='button-div'>
                <button onClick={submit} className='button'>Submit</button>
            </div>
        </>
    )
};

export default Create;


