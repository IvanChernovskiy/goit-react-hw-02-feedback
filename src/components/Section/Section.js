import React from 'react';
import PropTypes from 'prop-types';
import S from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={S.section}>
    <h2 className={S.section__title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
