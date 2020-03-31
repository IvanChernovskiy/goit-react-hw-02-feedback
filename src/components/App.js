import React, { Component } from 'react';
import FeedbackOptions from './FeedBackOptions/FeedBackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    const countPositiveFeedback = (
      (good / this.countTotalFeedback()) *
      100
    ).toFixed();
    return Number(countPositiveFeedback);
  };

  handleChange = e => {
    const { name } = e.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Plese leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleChange}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification msg="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
