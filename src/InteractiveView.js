import React, { Fragment } from 'react';

const InteractiveView = ({ value, onAction, actionText }) => (
  <Fragment>
    <h1>{value}</h1>
    <button onClick={onAction}>{actionText}</button>
  </Fragment>
);

export default InteractiveView;
