import '../styles.scss';

import SearchForm from '../components/search';

const Index = () => (
  <>
    <header className="p-l-md p-r-md p-t-sm p-b-sm">
      <img src="/static/buska-logo.svg" />
      <section className="container p-l-md p-r-md p-t-lg p-b-lg">
        <SearchForm />
      </section>
    </header>
  </>
);

export default Index;
