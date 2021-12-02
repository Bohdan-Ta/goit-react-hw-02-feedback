import React from 'react';
import PropTypes from 'prop-types';
import s from '../Buttons/Buttons.module.css';

export default function Buttons({ onIncrementFeetback, nameFeetback }) {
  return (
    <>
      <button
        type="button"
        onClick={() => onIncrementFeetback(nameFeetback)}
        className={s.button}
      >
        {nameFeetback}
      </button>
    </>
  );
}

Buttons.propTypes = {
  onIncrementFeetback: PropTypes.func.isRequired,
  nameFeetback: PropTypes.string.isRequired,
};
