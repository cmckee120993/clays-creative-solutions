import React from 'react';
import '../styles/blog.css';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../utils/queries';
import parse from 'html-react-parser';



function Blog() {


    const { data } = useQuery(GET_POSTS);
    let post;
    if (data) {
        post = data.posts;
    };

    return (
        <>
        <h3>Hello!</h3>
        {post ? (
            <>
            {post.map((post) => (
                <>
                <h2>{post.title}</h2>

                {parse(`${post.content}`)}
               
                <button id={post.id}>Open Full Article</button>
                </>
            ))}
            </>
        ): null}
        </>
    )
};

export default Blog;