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
      <div className='bg-nvidiaBlockBG bg-top bg-no-repeat h-[583px] md:h-[615px] lg:h-[830px] leading-none uppercase text-center overflow-hidden relative'>
        <div className='pt-[29px] lg:pt-[50px] mb-[4px]'>
          <h2 className='font-EurostileHeavy text-[1.4em] lg:text-[40px] lg:pl-[1.8rem] mb-[9px]'>RTX. Its on.</h2>
          <h1 className='font-EurostileBol text-[20px] lg:text-[26px] text-green'>Geforce rtx
            <sub className='text-[15px] align-top leading-2'>™</sub> gaming-notebooks</h1>
        </div>
        <p className='text-[14px] lg:text-[26px] tracking-tightest'>die weltweit ersten raytracing-gaming-notebooks</p>
        <div className='grid grid-cols-3 w-[310px] md:w-[437px] lg:w-[630px] m-auto mt-[25px] text-[12px] lg:text-[14px] text-left pr-[10px] lg:pr-0 pl-[10px] lg:pl-[41px] leading-none tracking-tightest justify-center'>
          <div className='ml-[-3px] lg:ml-0'>
            <p>bis zu </p>
            <p className='font-EurostileBol text-[14px] lg:text-[20px] my-[5px]'>6x</p>
            <p>schnellere leistung</p>
          </div>
          <div className='ml-[0px] lg:ml-[5px]'>
            <p>echtzeit- </p>
            <p className='font-EurostileBol text-[14px] lg:text-[20px] my-[5px]'>raytracing</p>
            <p>in spielen</p>
          </div>
          <div className='ml-[0px] lg:ml-[-22px]'>
            <p>neuste </p>
            <p className='font-EurostileBol text-[14px] lg:text-[20px] my-[5px]'>ki</p>
            <p>optimierte grafik</p>
          </div>
        </div>
        <p className='font-EurostileMed text-[15px] px-[7px] my-[1.75rem] leading-[1.434rem] normal-case m-auto max-w-md lg:max-w-none'>
          Steige auf die nächste Stufe der Mobilität mit den weltweit dünnsten und leichtesten Designs und erlebe mit den <br />
          GeForce RTX-Gaming-Notebooks mehr also nur atemberaubendeEchtzeit-Raytracing und KI-Performance!
        </p>
        <div className='bg-nvidiaBlockLaptop bg-98% bg-no-repeat w-[272px] md:w-[350px] lg:w-[730px] h-[180px] md:h-[220px] lg:h-[468px] sm:m-auto'></div>
        <div className='w-[320px] lg:w-[1220px] xl:w-[1220px] h-[475px] absolute top-[77.7%] es:top-[73.7%] sm:top-[71.7%] md:top-[69%] lg:top-[40.7%] es:right-[5%] sm:right-[5%] md:right-[20%] lg:right-[-19%] xl:right-[0%]'>
          <div className='bg-nvidiaBlockRTXlogo bg-100% bg-no-repeat w-[60px] md:w-[80px] lg:w-[168px] h-[55px] absolute top-[-2.5%] lg:top-[6.5%] right-[21%] lg:right-[25.5%] xl:right-[14.5%] z-50 animate-fade4'></div>
          <div className='bg-nvidiaBlockRTXGraphicCard bg-100% bg-no-repeat w-[125px] md:w-[150px] lg:w-[475px] h-[160px] md:h-[203px] lg:h-[475px] absolute top-[-6.9%] lg:top-[-40.9%] right-[-4%] lg:right-[10%] z-40 xl:animate-nvidiaRTXCard lg:animate-nvidiaRTXCardLaptopBP'></div>
        </div>
      </div> : null}
  </>);
};

export default NvidiaBlock;