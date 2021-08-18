function Blog({ posts }) {
    const content = posts.map((blog) => {
        return (
            <li key={blog.id}>{blog.title}</li>
        );
    })
    return (
        <ul>
            {content}
        </ul>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();
    return {
        props: {
            posts,
        },
    };
}

export default Blog;
