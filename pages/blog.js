import {Container} from 'semantic-ui-react'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import LayoutBlog from "@/components/layout-blog";
import Header from '@/components/customheader';
import Alert from '@/components/alert'
import Navbar from '@/components/navbar'

export default function Blog({ allPosts, preview}) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <LayoutBlog preview={preview}>
        <Head>
          <title>Harrow FNF Resources</title>
        </Head>
          <Header />
        <Navbar/>
        <Alert preview={preview} />
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </LayoutBlog>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts, preview },
  }
}
