import React, { useContext } from 'react';

import ThingsContext from '../ThingsContext/ThingsContext.js';

const ProviderWrapperChild = () => {
  const { setThing, thing, amount } = useContext(ThingsContext);

  const onButonClick = () => {
    if (thing === 'Unicorns') {
      setThing('Snowballs');
    } else {
      setThing('Unicorns');
    }
  };

  return (
    <div>
      <div>
        I have {amount} {thing}!
      </div>
      <button onClick={onButonClick}>Change Thing!</button>
    </div>
  );
};

export default ProviderWrapperChild;
