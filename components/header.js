import SearchForm from './search';
import Link from 'next/link';

const Header = ({ children }) => (
  <>
    <header className="p-l-md p-r-md p-t-sm p-b-sm app-header">
      <Link href="/">
        <img src="/static/buska-logo.svg" class="logo" />
      </Link>
      <section className="p-t-lg p-b-lg search-wrapper">
        <SearchForm />
      </section>
    </header>
    <main>
      <div className="container p-l-md p-r-md p-t-lg p-b-lg">{children}</div>
    </main>
  </>
);

export default Header;
