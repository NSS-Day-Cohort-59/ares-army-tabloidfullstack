import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "../../modules/postManager";
import { Card } from "reactstrap";

const PostDetails = () => {
    const {postId} = useParams()
    const [post, setPost] = useState({})

    const getPostDetails = () => {
        getPostById(postId).then(post => setPost(post));
    } 

    useEffect(() => {
        getPostDetails();
    }, [postId]);

    return (
        <div className="post-container">
            <div className="row justify-content-center">
            <Card key={post.id}><div className="post-container">
                <div>Title: {post.title}</div>
                {post.imageLocation ? <div><img src={post.imageLocation}/></div> : ""}
                <div>{post.content}</div>
                <div>Date Published: {post.publishDateTime}</div>
                <div>Author: {post?.userProfile?.fullName}</div>
            </div></Card>
            </div>
        </div>
    )
}

export default PostDetails;