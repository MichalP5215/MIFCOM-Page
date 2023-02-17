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
      <div className='bg-nvidiaBlockBG bg-top h-[583px] md:h-[615px] lg:h-[830px] bg-no-repeat leading-none uppercase text-center overflow-hidden relative'>
        <div className='pt-[29px] lg:pt-[50px] mb-[4px]'>
          <h2 className='font-EurostileHeavy text-[1.4em] lg:text-[40px] lg:pl-[1.8rem] mb-[9px]'>RTX. Its on.</h2>
          <h1 className='font-EurostileBol text-[20px] lg:text-[26px] text-green'>Geforce rtx
            <sub className='text-[15px] align-top leading-2'>™</sub> gaming-notebooks</h1>
        </div>
        <p className='text-[14px] lg:text-[26px] tracking-tightest'>die weltweit ersten raytracing-gaming-notebooks</p>
        <div className='grid grid-cols-3 w-[310px] lg:w-[630px] m-auto mt-[25px] text-[12px] lg:text-[14px] text-left pr-[10px] lg:pr-0 pl-[10px] lg:pl-[41px] leading-none tracking-tightest justify-center'>
          <div className='ml-[-3px] lg:ml-0'>
            <p>bis zu </p>
            <p className='text-[14px] lg:text-[20px] font-EurostileBol mt-[5px] mb-[5px]'>6x</p>
            <p>schnellere leistung</p>
          </div>
          <div className='ml-[0px] lg:ml-[5px]'>
            <p>echtzeit- </p>
            <p className='text-[14px] lg:text-[20px] font-EurostileBol mt-[5px] mb-[5px]'>raytracing</p>
            <p>in spielen</p>
          </div>
          <div className='ml-[0px] lg:ml-[-22px]'>
            <p>neuste </p>
            <p className='text-[14px] lg:text-[20px] font-EurostileBol mt-[5px] mb-[5px]'>ki</p>
            <p>optimierte grafik</p>
          </div>
        </div>
        <p className='pr-[7px] pl-[7px] mt-[1.75rem] mb-[1.75rem] font-EurostileMed text-[15px] normal-case leading-[1.434rem]'>
          Steige auf die nächste Stufe der Mobilität mit den weltweit dünnsten und leichtesten Designs und erlebe mit den <br />
          GeForce RTX-Gaming-Notebooks mehr also nur atemberaubendeEchtzeit-Raytracing und KI-Performance!
        </p>
        <div className='bg-nvidiaBlockLaptop bg-98% w-[272px] h-[180px] lg:w-[730px] lg:h-[468px] bg-no-repeat lg:m-auto'> </div>
        <div className='absolute h-[475px] w-[320px] lg:w-[1220px] xl:w-[1220px] top-[77.7%] es:top-[73.7%] sm:top-[62.7%] es:right-[5%] sm:right-[14%] lg:top-[40.7%]'>
          <div className='bg-nvidiaBlockRTXlogo bg-100% w-[60px] lg:w-[168px] h-[55px] bg-no-repeat absolute right-[21%] xl:right-[14.5%] lg:right-[25.5%] top-[-2.5%] lg:top-[6.5%] z-50 animate-fade4'></div>
          <div className='bg-nvidiaBlockRTXGraphicCard bg-100% w-[125px] h-[160px] lg:w-[475px] lg:h-[475px] bg-no-repeat absolute top-[-6.9%] right-[-4%] lg:top-[-40.9%] lg:right-[10%] z-40 xl:animate-nvidiaRTXCard lg:animate-nvidiaRTXCardLaptopBP'></div>
        </div>
      </div> : null}
  </>);
};

export default NvidiaBlock;