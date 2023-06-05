import React from 'react';
import '../styles/blog.css';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../utils/queries';


function Blog() {

    const { data } = useQuery(GET_POSTS);
    let post;
    if (data) {
        post = data.posts;
    };

    console.log(post);

    return (
        <>
        <h3>Hello!</h3>
        {post ? (
            <>
            {post.map((post) => (
                <>
                <h2>{post.title}</h2>
                <img src={post.imgOne} />
                <p>{post.parOneEn}</p>
                <img src={post.imgTwo} />
                <p>{post.parTwoEn}</p>
               
                <button id={post.id}>Open Full Article</button>
                </>
            ))}
            </>
        ): null}
        </>
    )
};

export default Blog;