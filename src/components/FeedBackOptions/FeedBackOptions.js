import React from 'react';
import PropTypes from 'prop-types';
import S from './FeedBack.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { good, neutral, bad } = options;
  return (
    <div className={S.container}>
      <button
        type="button"
        onClick={onLeaveFeedback}
        name="good"
        value={good}
        className={S.btn}
      >
        Good
      </button>
      <button
        type="button"
        onClick={onLeaveFeedback}
        name="neutral"
        value={neutral}
        className={S.btn}
      >
        Netural
      </button>
      <button
        type="button"
        onClick={onLeaveFeedback}
        name="bad"
        value={bad}
        className={S.btn}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
