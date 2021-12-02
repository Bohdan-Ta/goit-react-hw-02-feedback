import React from 'react';

export default function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  persantageGoodFeedback,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>Total: {totalFeedback()} </p>
      <p>Positive feedbeck: {persantageGoodFeedback()} %</p>
    </div>
  );
}
