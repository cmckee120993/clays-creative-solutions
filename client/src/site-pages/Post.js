import React from 'react';
import '../styles/post.css';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../utils/queries';
// import parse from 'html-react-parser';



function Post() {

   let postId = window.location.href.slice(27);
    console.log(postId);
   const {data} = useQuery(GET_POST, {
            variables: { id: `${postId}`},
        } );
console.log(data);
    let post;
    if (data) {
        post = data.post;
    };

    console.log(post)

    return (
        <>
            <h2 className='blog-title-preview'>{post.title}</h2>
            <h3>{post.postDate}</h3>
            <p>{post.content}</p>
        </>
    )
};

export default Post;