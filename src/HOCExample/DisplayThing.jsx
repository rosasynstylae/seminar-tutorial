import React from 'react';

import withThing from './withThing.jsx';

const DisplayThing = ({ thing, setThing }) => {
  const onButtonClick = () => {
    if (thing === 'Unicorns') {
      setThing('Snowballs');
    } else {
      setThing('Unicorns');
    }
  };

  return (
    <div className="displayInner">
      <div>I have 12 {thing}!</div>
      <button onClick={onButtonClick}>Change Thing!</button>
    </div>
  );
};

export default withThing(DisplayThing);
