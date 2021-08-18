import { useRouter } from 'next/router'

function Post({ title }) {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <h1>{title}</h1>
    );
}

export async function getStaticProps({ params }) {
    const result = await fetch(`http://localhost:3000/api/posts/${params.id}`);
    const post = await result.json();
    return {
        props: {
            title: post.title,
        }
    };
}

export async function getStaticPaths() {
    const result = await fetch('http://localhost:3000/api/posts');
    const posts = await result.json();
    const paths = posts.map((post) => {
        return {
            params: {
                id: post.id.toString(),
            },
        };
    });
    return {
        paths: [{
            params: {
                id: '1',
            },
        }],
        fallback: true,
    };
}

export default Post;
