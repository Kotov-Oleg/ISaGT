import React from 'react';

import * as cl from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={cl.container}>
      <div className={cl.loader}/>
    </div>
  );
};

export default Loader;