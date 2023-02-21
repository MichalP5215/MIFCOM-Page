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
      <div className='bg-intelBlockBG bg-top bg-no-repeat h-[367px] md:h-[490px] lg:h-[670px] px-[10px] leading-none uppercase text-center overflow-hidden'>
        <div className='pt-[40px] lg:pt-[50px] mb-[20px] lg:mb-[50px]'>
          <h2 className='font-EurostileHeavy text-[1.3em] lg:text-[2.6em] mb-[5px] lg:mb-0'>leistung auf desktop-niveau</h2>
          <h1 className='text-[1.4em] lg:text-[40px]'>jetzt in einem laptop</h1>
        </div>
        <p className='font-EurostileMed text-[14px] lg:text-[24px] mb-6 lg:mb-8 leading-normal lg:leading-none '>9th gen intel® core™ i9-9980HK prozessor</p>
        <div className='bg-intelBlockLaptop bg-100% bg-no-repeat w-[288px] md:w-[550px] lg:w-[728px] h-[200px] md:h-[301px] lg:h-[399px] m-auto relative'>
          <div className='bg-intelBlockIntelLogo bg-100% bg-no-repeat w-[65px] md:w-[120px] lg:w-[195px] h-[65px] md:h-[95px] lg:h-[159px] absolute left-[14.1%] top-[10.7%] z-50 animate-intelLogo'></div>
        </div>
        <div className='font-EurostileConHea drop-shadow-xl text-left mt-[-143px] md:mt-[-91px] lg:mt-[-147px] ml-[4px] md:ml-[100px] lg:ml-[191px] xl:ml-[284px] z-40'>
          <p className='text-[18px] lg:text-[36px] '>bis zu</p>
          <p className='text-[30px] lg:text-[55px]'>5.0 ghz 1 8 kerne 16 threads</p>
        </div>
      </div> : null}
  </>);
};

export default IntelBlock;