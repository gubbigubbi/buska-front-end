import { withRouter } from 'next/router';

const Page = withRouter(props => (
  <>
    <h1>{props.router.query.id}</h1>
    <p>This is the blog post content.</p>
  </>
));

export default Page;
