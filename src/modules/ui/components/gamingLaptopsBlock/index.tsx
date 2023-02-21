/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { InterfaceGamingLaptopsBlock } from './types';

const GamingLaptopsBlock: React.FunctionComponent<InterfaceGamingLaptopsBlock> = (props) => {
  const [showGamingLaptopsBlock, setShowGamingLaptopsBlock] = useState(false);

  useEffect(() => {
    const gamingLaptopsBlockTimer = setTimeout(() => {
      setShowGamingLaptopsBlock(!showGamingLaptopsBlock)
    }, 6000)
    return () => clearTimeout(gamingLaptopsBlockTimer);
  }, []);

  return (<>
    {showGamingLaptopsBlock ?
      <div className='bg-gamingLaptopsBlockE-SeriesBG bg-top bg-no-repeat h-[367px] md:h-[490px] lg:h-[795px] px-[10px] leading-none uppercase overflow-hidden'>
        <h2 className='font-EurostileBol text-[1.3em] lg:text-[40px] lg:mb-[50px] text-center'>Angepasst an deine Bedürfnisse</h2>
        <div className='ml-[14.5%]'>
          <h3 className='font-EurostileBol lg:text-[30px] mb-[35px]'>laptop 1 eg7 i7</h3>
          <p className='text-[16px] leading-[1.3] normal-case mb-[20px]'>Schließe Deine Peripheriegeräte über die schnellen <b className='Eurostile-Bol'>USB 3.0-Ports</b> an , und , <br />
            erlebe Dein Spiel auf bis zu <b className='Eurostile-Bol'>3 Monitore</b> über HDMI oder DisplayPort.</p>
          <p className='text-[16px] leading-[1.3] normal-case mb-[20px]'>High-Speed-Ethernet oder Wireless-AC sind natürlich auch mit von der Partie.</p>
        </div>


      </div> : null}
  </>);
};

export default GamingLaptopsBlock;
