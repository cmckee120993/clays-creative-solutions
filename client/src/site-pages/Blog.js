import React from 'react';
import '../styles/blog.css';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../utils/queries';
import parse from 'html-react-parser';



function Blog() {

    console.log(window.location.href);

    const { data } = useQuery(GET_POSTS);
    let post;
    if (data) {
        post = data.posts;
    };

    function postPreview(post) {
        console.log(post);
        let postContent = post.content;
        let preview = postContent.slice(0,150);
        let postPreview = preview +'</p>';
        return(
            <>
            {parse(`${postPreview}`)}
            </>
        )
    }

    function singlePost(event) {
        let postButton = event.target;
        let postId = postButton.getAttribute('postId');
        document.location.href = `/post/${postId}`
    }
    return (
        <>
        <h3 className='title'>Articles</h3>
        {post ? (
            <>
            {post.map((post) => (
                <>
                    <div className='blog-post-preview-div'>
                        <h2 className='blog-title-preview'><button onClick={singlePost} postId={post._id} className='button single-post-button'>{post.title}</button></h2>
                        <div className='blog-content-preview'>
                            {postPreview(post)}
                        </div>
                    </div>
                </>
            ))}
            </>
        ): null}
        </>
    )
};

export default Blog;