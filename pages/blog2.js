import React from "react";

function Blog() {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:3000/api/posts').then((result) => {
            return result.json();
        }).then((posts) => {
            setPosts(posts);
        });
    }, []);
    return (
        <ul>
            {posts.map((blog) => {
                return (
                    <li key={blog.id}>{blog.title}</li>
                );
            })}
        </ul>
    );
}

export default Blog;
