import '../styles.scss';
import Page from '../layouts/main';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Head from 'next/head';

import AnswerButton from '../components/answer-button';

const Category = props => (
  <>
    <Head>
      <title>Buska | IT Support Questions and Answer</title>
      <meta name="title" content="Buska | IT Support Questions and Answers" />
    </Head>

    <Page>
      <div className="text-center subheading">Help is one click away</div>
      <h2 className="text-center m-b-lg">Choose an answer:</h2>
      <div className="button-group">
        {props.posts.map(post => (
          <AnswerButton key={post.id} post={post} />
        ))}
      </div>
    </Page>
  </>
);

Category.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://api.buska.com.au/wp-json/wp/v2/posts?categories=${id}`,
  );
  const data = await res.json();

  return {
    posts: data,
  };
};

export default Category;
