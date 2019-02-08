import React from 'react';
import App, { Container } from 'next/app';

import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import SearchForm from '../components/search';
import Link from 'next/link';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <header className="p-l-sm p-r-sm">
          <div className="container app-header">
            <Link href="/index">
              <img
                src="/static/buska-logo.svg"
                className="logo cursor-pointer"
              />
            </Link>
            <section className="search-wrapper">
              <SearchForm />
            </section>
          </div>
        </header>

        <main className="p-l-sm p-r-sm">
          <div className="page-container container p-l-lg p-r-lg p-t-lg p-b-lg">
            <Component {...pageProps} />
          </div>

          <div className="subheading text-center p-t-md p-b-md">
            made by wegeekalot 👨‍💻👩‍💻
          </div>
        </main>
      </Container>
    );
  }
}
