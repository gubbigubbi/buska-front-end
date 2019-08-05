import '../styles.scss';
import Page from '../layouts/main';
import Head from 'next/head';

// Components
import AnswerCategories from '../components/categories';

const Index = () => (
  <>
    <Head>
      <title>Buska | IT Support Questions and Answer</title>
      <meta name="title" content="Buska | IT Support Questions and Answers" />
    </Head>
    <Page>
      <div className="text-center subheading">Need some inspiration?</div>
      <h2 className="text-center m-b-lg">Pick from the topics below:</h2>
      <AnswerCategories />

      <footer>
        <div className="text-center subheading m-b-xs">Coming soon:</div>
        <ul className="text-center text-small">
          <li>
            <del>Feedback for each answer</del>
          </li>
          <li>Comments on each answer</li>
          <li>More speed!</li>
        </ul>
      </footer>
    </Page>
  </>
);

export default Index;
