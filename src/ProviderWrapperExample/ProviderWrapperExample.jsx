import React from 'react';

import ProviderWrapper from './ProviderWrapper.jsx';
import ProviderWrapperChild from './ProviderWrapperChild.jsx';

const ProviderWrapperExample = () => (
  <ProviderWrapper>
    <ProviderWrapperChild />
  </ProviderWrapper>
);

export default ProviderWrapperExample;
