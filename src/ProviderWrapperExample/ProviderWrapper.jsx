import React, { useState } from 'react';

import ThingsContext from '../ThingsContext/ThingsContext.js';

const ProviderWrapper = ({ children }) => {
  const [thing, setThing] = useState('Unicorns');

  return (
    <ThingsContext.Provider value={{ thing, amount: 12, setThing }}>
      {children}
    </ThingsContext.Provider>
  );
};

export default ProviderWrapper;
