import '../styles.scss';
import fetch from 'isomorphic-unfetch';
import Page from '../layouts/main';
import Head from 'next/head';

// Components
import VoteButton from '../components/vote';
import AnswerCategories from '../components/categories';

const Answer = props => (
  <>
    <Head>
      <title>
        {props.answer.title} | Buska | IT Support Questions and Answer
      </title>
      <meta
        name="title"
        content={
          props.answer.title | 'Buska | IT Support Questions and Answers'
        }
      />
      <meta
        name="description"
        content={props.answer.excerpt.replace(/(<([^>]+)>)/gi, '')}
      />
    </Head>

    <Page>
      <section className="answer-header">
        <VoteButton rating={props.answer.rating} id={props.answer.id} />
        <h1 className="m-b-xs answer-title">{props.answer.title}</h1>
        <div className="author-meta m-b-md">
          <img
            src={props.answer.author_avatar}
            className="author-meta__avatar"
          />{' '}
          {props.answer.author_name} on {props.answer.date}
        </div>
      </section>
      <div dangerouslySetInnerHTML={{ __html: props.answer.content }} />

      <div className="page-container__footer">
        <div className="text-center subheading">Need some inspiration?</div>
        <h2 className="text-center m-b-md">Related topics:</h2>
        <AnswerCategories categories={props.answer.categories} />
      </div>
    </Page>
  </>
);

Answer.getInitialProps = async function(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.buska.com.au/wp-json/wp/v2/posts/${id}`);
  const data = await res.json();

  const date = new Date(data.date);

  const result = {
    id: data.id,
    title: data.title.rendered,
    content: data.content.rendered,
    excerpt: data.excerpt.rendered,
    date: date.toLocaleDateString(),
    author_name: data.author_meta.user_nicename,
    author_avatar: data.author_meta.avatar,
    categories: data.categories,
    rating: data.acf.rating ? data.acf.rating : 0,
  };

  return {
    answer: result,
  };
};

export default Answer;
