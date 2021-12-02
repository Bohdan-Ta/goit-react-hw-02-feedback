import { Component } from 'react';
import Feedback from './components/Feedback';
import Section from './components/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeetback = nameFeetback => {
    this.setState(prevState => ({
      [nameFeetback]: prevState[nameFeetback] + 1,
    }));
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
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.entries(this.state)}
            onIncrementFeetback={this.incrementFeetback}
          />
        </Section>
        <Section title="Statistics">
          {this.totalFeedback() && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback}
              persantageGoodFeedback={this.persantageGoodFeedback}
            />
          )}
          {!this.totalFeedback() && (
            <Notification
              message="There is no feedback!       
            Make your choice"
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
