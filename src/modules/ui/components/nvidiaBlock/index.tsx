/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { InterfaceNvidiaBlock } from './types';

const NvidiaBlock: React.FunctionComponent<InterfaceNvidiaBlock> = (props) => {
  const [showNvidiaBlock, setShowNvidiaBlock] = useState(false);

  useEffect(() => {
    const headerTimer = setTimeout(() => {
      setShowNvidiaBlock(!showNvidiaBlock)
    }, 6000)
    return () => clearTimeout(headerTimer);
  }, []);

  return (<>
    {showNvidiaBlock ?
      <div className='bg-nvidiaBlockBG h-[830px] bg-no-repeat leading-none uppercase justify-center text-center'>
        <div className='pt-[50px] mb-[4px]'>
          <h2 className='font-EurostileHeavy text-[40px] pl-[1.8rem] mb-[9px]'>RTX. Its on.</h2>
          <h1 className='font-EurostileBol text-[26px] text-green'>Geforce rtx
            <sub className='text-[15px] align-top leading-2'>™</sub> gaming-notebooks</h1>
        </div>
        <p className='text-[26px] tracking-tightest'>die weltweit ersten raytracing-gaming-notebooks</p>
      </div> : null}
  </>);
};

export default NvidiaBlock;