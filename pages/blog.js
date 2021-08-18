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

export async function getStaticProps() {
    const res = await fetch('https://gorest.co.in/public/v1/posts');
    const posts = await res.json();
    return {
        props: {
            posts: posts.data,
        },
    };
}

export default Blog;
