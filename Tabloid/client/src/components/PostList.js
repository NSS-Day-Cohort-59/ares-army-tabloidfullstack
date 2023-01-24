import { getAllPosts } from "../modules/postManager";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const getAll = () => {
        getAllPosts().then(posts => setPosts(posts));
    } 

    useEfect(() => {
        getAll();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
            {posts.map((post) => { return <div><h5>{post.title}</h5>{post.userProfile.firstName} {post.categoryId} </div> })}
            </div>
        </div>
    )
}