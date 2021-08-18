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
    const result = await fetch(`https://gorest.co.in/public/v1/posts/${params.id}`);
    const post = await result.json();
    return {
        props: {
            title: post.data.title,
        }
    };
}

export async function getStaticPaths() {
    const result = await fetch('https://gorest.co.in/public/v1/posts/');
    const posts = await result.json();
    const paths = posts.data.map((post) => {
        return {
            params: {
                id: post.id.toString(),
            },
        };
    });
    return {
        paths: [{
            params: {
                id: '69',
            },
        }],
        fallback: true,
    };
}

export default Post;
