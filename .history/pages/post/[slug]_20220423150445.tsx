import { GetStaticProps } from 'next'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'

interface Props{
    post: Post;
}


function Post({ post }: Props) {
  return (
    <main>
          <Header />
          <img
              className="w-full px-20 py-10 h-40 object-cover"
              src={urlFor(post.mainImage).url()!} alt="" />
    </main>
  )
}

export default Post;

export const getStaticPaths = async () => {
  const query = `
    *[_type == "post"]{
  _id,
  slug{
  current
}}`
  const posts = await sanityClient.fetch(query)
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  author->{
  name,
  image
},
'comments': *[
  _type == "comment"&&
  post._ref == ^._id &&
  approved == true
],
description,
mainImage,
slug,
body
}`
    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    });
    if (!post) {
        return {
            notFound: true
        }
    }
    return {
        props: {
           post,
        },
        revalidate: 60, // Recaches the page in every 60 seconds
    }
}

