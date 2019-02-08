class VoteButton extends React.Component {
  state = {
    rating: 3,
    hasVoted: false,
  };

  upVote = () => {
    if (!this.state.hasVoted) {
      this.setState({
        hasVoted: true,
        rating: this.state.rating + 1,
      });
    }
  };

  downVote = () => {
    if (!this.state.hasVoted) {
      this.setState({
        hasVoted: true,
        rating: this.state.rating - 1,
      });
    }
  };

  render() {
    const { rating } = this.state;

    return (
      <div className="vote-button">
        <span
          className="vote-up vote-action cursor-pointer"
          onClick={this.upVote}
        >
          👍 +1
        </span>
        <span className="vote-score">{rating}</span>
        <span
          className="vote-down vote-action cursor-pointer"
          onClick={this.downVote}
        >
          👎 -1
        </span>
      </div>
    );
  }
}

export default VoteButton;
