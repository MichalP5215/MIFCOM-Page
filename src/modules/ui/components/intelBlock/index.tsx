/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { InterfaceIntelBlock } from './types';

export const IntelBlock: React.FunctionComponent<InterfaceIntelBlock> = (props) => {
  const [showIntelBlock, setShowIntelBlock] = useState(false);

  useEffect(() => {
    const itelBlockTimer = setTimeout(() => {
      setShowIntelBlock(!showIntelBlock)
    }, 6000)
    return () => clearTimeout(itelBlockTimer);
  }, []);

  return (<>
    {showIntelBlock ?
      <div className='bg-intelBlockBG h-[670px] bg-no-repeat leading-none uppercase justify-center text-center'>
        <div className='pt-[50px] mb-[50px]'>
          <h2 className='font-EurostileHeavy text-[2.6em]'>leistung auf desktop-niveau</h2>
          <h1 className='text-[40px]'>jetzt in einem laptop</h1>
        </div>
        <p className='text-[24px] font-EurostileMed mb-8'>9th gen intel® core™ i9-9980HK prozessor</p>
        <div className='bg-intelBlockLaptop bg-no-repeat w-[728px] h-[399px] m-auto relative'>
          <div className='bg-intelBlockIntelLogo bg-no-repeat w-[195px] h-[159px] absolute left-[14.1%] top-[10.7%] z-50 animate-intelLogo'></div>
        </div>

        <div className='font-EurostileConHea drop-shadow-xl text-left mt-[-147px] ml-[292px] z-40'>
          <p className='text-[36px] '>bis zu</p>
          <p className='text-[55px] '>5.0 ghz 1 8 kerne 16 threads</p>
        </div>
      </div> : null}
  </>);
};

export default IntelBlock;