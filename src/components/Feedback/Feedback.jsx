import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  persantageGoodFeedback = () => {
    const { good } = this.state;
    const sumFeedback = this.totalFeedback();
    return Math.trunc((good / sumFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.container}>
        <h2>Please leave feedback</h2>
        <div>
          <button
            type="button"
            className={s.button}
            onClick={() => this.buttonClick(good)}
          >
            Good
          </button>
          <button
            type="button"
            className={s.button}
            onClick={() => this.buttonClick(neutral)}
          >
            Neutral
          </button>
          <button
            type="button"
            className={s.button}
            onClick={() => this.buttonClick(bad)}
          >
            Bad
          </button>
        </div>
        <h3>Statistics</h3>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bed: {bad}</p>
          <p>Total: {this.totalFeedback()}</p>
          <p>Positive feedback: {this.persantageGoodFeedback()}</p>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  button: PropTypes.string,
};

export default Feedback;
