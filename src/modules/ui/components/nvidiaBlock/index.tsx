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
      <div className='bg-nvidiaBlockBG h-[830px] bg-no-repeat leading-none uppercase text-center overflow-hidden relative'>
        <div className='pt-[50px] mb-[4px]'>
          <h2 className='font-EurostileHeavy text-[40px] pl-[1.8rem] mb-[9px]'>RTX. Its on.</h2>
          <h1 className='font-EurostileBol text-[26px] text-green'>Geforce rtx
            <sub className='text-[15px] align-top leading-2'>™</sub> gaming-notebooks</h1>
        </div>
        <p className='text-[26px] tracking-tightest'>die weltweit ersten raytracing-gaming-notebooks</p>
        <div className='grid grid-cols-3 w-[630px] m-auto mt-[25px] text-[14px] text-left pl-[41px] leading-none tracking-tightest justify-center'>
          <div>
            <p>bis zu </p>
            <p className='text-[20px] font-EurostileBol mt-[5px] mb-[5px]'>6x</p>
            <p>schnellere leistung</p>
          </div>
          <div className='ml-[5px]'>
            <p>echtzeit- </p>
            <p className='text-[20px] font-EurostileBol mt-[5px] mb-[5px]'>raytracing</p>
            <p>in spielen</p>
          </div>
          <div className='ml-[-22px]'>
            <p>neuste </p>
            <p className='text-[20px] font-EurostileBol mt-[5px] mb-[5px]'>ki</p>
            <p>optimierte grafik</p>
          </div>
        </div>
        <p className='mt-[27px] mb-[1.75rem] font-EurostileMed text-[15px] normal-case leading-[23px]'>
          Steige auf die nächste Stufe der Mobilität mit den weltweit dünnsten und leichtesten Designs und erlebe mit den <br />
          GeForce RTX-Gaming-Notebooks mehr also nur atemberaubendeEchtzeit-Raytracing und KI-Performance!
        </p>
        <div className='bg-nvidiaBlockLaptop w-[730px] h-[468px] bg-no-repeat m-auto'> </div>
        <div className='absolute h-[475px] w-[1220px] top-[40.7%]'>
          <div className='bg-nvidiaBlockRTXlogo w-[168px] h-[55px] bg-no-repeat absolute xl:right-[14.5%] lg:right-[25.5%] top-[6.5%] z-50 animate-fade4'></div>
          <div className='bg-nvidiaBlockRTXGraphicCard w-[475px] h-[475px] bg-no-repeat absolute top-[-40.9%] right-[10%] z-40 xl:animate-nvidiaRTXCard lg:animate-nvidiaRTXCardLaptopBP'></div>
        </div>
      </div> : null}
  </>);
};

export default NvidiaBlock;