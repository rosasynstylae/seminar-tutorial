import React from 'react';

import ThingsContext from '../ThingsContext/ThingsContext.js';

const ParentContextExample = () => (
  <div>
    <ThingsContext.Provider value={{ thing: 'Unicorns', amount: 12 }}>
      <div>
        <ThingsContext.Provider value={{ thing: 'Snowballs', amount: 45 }}>
          <div>
            <ThingsContext.Consumer>
              {({ thing, amount }) => (
                <div>
                  I have {amount} {thing}!
                </div>
              )}
            </ThingsContext.Consumer>
          </div>
        </ThingsContext.Provider>
      </div>
    </ThingsContext.Provider>
  </div>
);

export default ParentContextExample;
