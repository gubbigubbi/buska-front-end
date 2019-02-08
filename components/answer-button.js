import Link from 'next/link';

class AnswerButton extends React.Component {
  state = {
    rating: 3,
  };

  render() {
    const { rating } = this.state;
    const { post } = this.props;

    const ratingComponent = rating > 0 ? `👍 +${rating}` : `👎 -${rating}`;

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
