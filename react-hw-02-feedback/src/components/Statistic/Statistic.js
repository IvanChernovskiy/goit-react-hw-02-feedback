import React from 'react';
import PropTypes from 'prop-types';
import S from './Statistic.module.css';

const Statistic = ({ value, label }) => (
  <>
    {label === 'Positive feedback' ? (
      <p className={S.text}>
        {label}: {value}%
      </p>
    ) : (
      <p className={S.text}>
        {label}: {value}
      </p>
    )}
  </>
);

Statistic.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Statistic;
