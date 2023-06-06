import React, { useState } from 'react';
import './style.css';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function Create() {

    const modules = {
        toolbar: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
          ["link", "image", "video"],
          ["clean"],
        ],
      };

      const [content, setContent] = useState("");

  // rich text editor handle change
  const handleContent = (event) => {
    console.log(event);
    setContent(event);
  };


    const [ addPost ] = useMutation(ADD_POST);

    function submitPost() {
        let titleEn = document.querySelector(".title-english").value;
        
        addPost({
            variables: {
                content: content,
                title: titleEn,
            }
        });
        console.log(content)
        // document.location.reload();
    }

    return (
        <>

            <h2 className='title'>Create a Post</h2>
            
            <h3 className='label'>English Title</h3>
            <input className='input title-english'></input>

        
            <div className='post-div'>
                <h3 className='label'>Post</h3>
                <ReactQuill
            modules={modules}
            onChange={handleContent}
            value={content}
            theme="snow"
            className="par-one-en"
            placeholder="Write something.."
            style={{ border: "1px solid yellow" }}
          />
            </div>

            <div className='button-div'>
                <button onClick={submitPost} className='button'>Submit</button>
            </div>
        </>
    )
};

export default Create;


