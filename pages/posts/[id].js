import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/post";

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    )
}
export function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
export function getStaticProps({ params }) {
    const { id } = params;
    const postData = getPostData(id);
    return {
        props: {
            postData
        }
    }
}