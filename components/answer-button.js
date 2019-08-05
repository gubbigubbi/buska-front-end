import Link from 'next/link';

class AnswerButton extends React.Component {
  render() {
    const { post } = this.props;

    let ratingComponent;

    if (post.acf.rating) {
      ratingComponent =
        post.acf.rating > 0
          ? `👍 +${post.acf.rating}`
          : `👎 -${post.acf.rating}`;
    } else {
      ratingComponent = '';
    }

    return (
      <div>
        <Link as={`/answer/${post.id}`} href={`/answer?id=${post.id}`}>
          <button className="button button__primary">
            <a>{post.title.rendered}</a>

            <span className="badge badge__light is-at-bottom">
              {ratingComponent}
            </span>
          </button>
        </Link>
      </div>
    );
  }
}

export default AnswerButton;
