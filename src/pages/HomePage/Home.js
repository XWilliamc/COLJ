import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
     
    </>
  );
}

export default Home;
