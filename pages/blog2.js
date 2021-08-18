import React from "react";

function Blog() {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        fetch('https://gorest.co.in/public/v1/posts').then((response) => {
            return response.json();
        }).then((result) => {
            setPosts(result.data);
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
