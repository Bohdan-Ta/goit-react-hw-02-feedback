import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons';
import s from './Feedback.module.css';

export default function Feedback({ options, onIncrementFeetback }) {
  return (
    <>
      <ul className={s.list}>
        {options.map(([key]) => (
          <li key={key}>
            <Buttons
              onIncrementFeetback={onIncrementFeetback}
              nameFeetback={key}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

Feedback.propTypes = {
  button: PropTypes.string,
};
