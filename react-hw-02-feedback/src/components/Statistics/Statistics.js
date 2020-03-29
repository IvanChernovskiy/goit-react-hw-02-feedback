import React from 'react';
import PropTypes from 'prop-types';
import Statistic from '../Statistic/Statistic';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <Statistic value={good} label="Good" />
    <Statistic value={neutral} label="Neutral" />
    <Statistic value={bad} label="Bad" />
    <Statistic value={total} label="Total" />
    <Statistic value={positivePercentage} label="Positive feedback" />
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
