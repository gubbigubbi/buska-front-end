import { ToastConsumer } from '../components/toast.context';

class VoteButton extends React.Component {
  state = {
    rating: this.props.rating ? parseInt(this.props.rating) : 0,
    hasVoted: false,
  };

  upVote = openToast => {
    if (!this.state.hasVoted) {
      this.setState({
        hasVoted: true,
        rating: this.state.rating + 1,
      });

      this.vote(this.state.rating + 1);
    }
  };

  downVote = openToast => {
    if (!this.state.hasVoted) {
      this.setState({
        hasVoted: true,
        rating: this.state.rating - 1,
      });

      this.vote(this.state.rating - 1);
    }
  };

  vote = rating => {
    fetch('https://api.buska.com.au/wp-json/custom/v1/rating', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: this.props.id, value: rating }),
    });
  };

  render() {
    const { rating } = this.state;

    return (
      <ToastConsumer>
        {({ openToast }) => (
          <div className="vote-button">
            <span
              className="vote-up vote-action cursor-pointer"
              onClick={() =>
                this.upVote(openToast('👏 Thank you for your feedback'))
              }
            >
              👍 +1
            </span>
            <span className="vote-score">{rating}</span>
            <span
              className="vote-down vote-action cursor-pointer"
              onClick={() =>
                this.downVote(
                  openToast(
                    `👏 Thank you for your feedback, we'll take a look at this answer. 👀`,
                  ),
                )
              }
            >
              👎 -1
            </span>
          </div>
        )}
      </ToastConsumer>
    );
  }
}

export default VoteButton;
