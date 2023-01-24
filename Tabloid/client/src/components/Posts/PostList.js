import { getAllPosts } from "../../modules/PostManager";
import React, { useEffect, useState } from "react";
import { Card } from "reactstrap";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const getAll = () => {
        getAllPosts().then(posts => setPosts(posts));
    } 

    useEffect(() => {
        getAll();
    }, []);

    return (
        <div className="post-container">
            <div className="post_list_header"><div>Author</div><div>Title</div><div>Category</div></div>
            <div className="row justify-content-center">
            {posts.map((post) => { return <Card><div className="post_elements">{post.userProfile.fullName}</div>
            <div className="post_elements"> {post.title}</div>
            <div className="post_elements"> {post.categoryId} </div></Card> })}
            </div>
        </div>
    )
}

export default PostList;