import React from 'react';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  persantageGoodFeedback,
}) {
  return (
    <ul className={s.wrapper}>
      <li className={`${s.list} ${s.good}`}>
        <p className={s.itemLikes}>Good:</p>
        <span className={s.data}>{good}</span>
      </li>
      <li className={`${s.list} ${s.neutral}`}>
        <p className={s.itemLikes}>Neutral:</p>
        <span className={s.data}>{neutral}</span>
      </li>
      <li className={`${s.list} ${s.bad}`}>
        <p className={s.itemLikes}>Bad: </p>
        <span className={s.data}>{bad}</span>
      </li>
      <li className={s.list}>
        <p className={s.itemLikes}>Total: </p>
        <span className={s.data}>{total()}</span>
      </li>
      <li className={s.list}>
        <p className={s.itemLikes}>Positive:</p>
        <span className={s.data}>{persantageGoodFeedback()} %</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  persantageGoodFeedback: PropTypes.func.isRequired,
};
