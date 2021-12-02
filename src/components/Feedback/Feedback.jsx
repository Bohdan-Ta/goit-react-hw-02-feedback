import React from 'react';
import PropTypes from 'prop-types';

import Buttons from '../Buttons/Buttons';
import s from './Feedback.module.css';

export default function Feedback({ options, onIncrementFeetback }) {
  return (
    <>
      <ul className={s.list}>
        {options.map(([key]) => (
          <li key={key} className={s.item}>
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
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  onIncrementFeetback: PropTypes.func.isRequired,
};
