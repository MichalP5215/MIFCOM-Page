/* eslint-disable */
import React, { useEffect, useState } from 'react';
import AcordionItem from './acordionItem';
import { InterfaceGamingLaptopsBlock } from './types';
import { Collapse } from 'react-collapse';

const GamingLaptopsBlock: React.FunctionComponent<InterfaceGamingLaptopsBlock> = (props) => {
  const [showGamingLaptopsBlock, setShowGamingLaptopsBlock] = useState(false);
  const [open, setOpen] = useState(0);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(0)
    }
    setOpen(index)
  }

  const acordionData = [
    {
      title: 'laptop 1 eg7 i7',
      category: 'e-serie',
      toggleClass: 'w-[400%]',
      secondCategory: '\u00A0',
      wrapperCategoryClass: 'pt-[12px] px-[29px] lg:px-[26px] pb-[6px] top-[37.6%] left-[-5%] md:left-[-3%] lg:top-[40.5%] lg:left-[14.3%] skew-x-[-28deg] ',
      categotyClass: 'skew-x-[28deg] ml-[12px] lg:ml-0',
      backGround: 'bg-gamingLaptopsBlockE-SeriesBG',
      titleCategory: 'Perfomance',
      laptopItemBG: 'bg-gamingLaptopsBlockLaptop_Block_E-serie',
      acordionCharData: [
        {
          numberText: '1',
          beforBG: true,
          active: [true, true, true],
        },
        {
          numberText: '2',
          beforBG: false,
          active: [true, true, true],
        },
        {
          numberText: '3',
          beforBG: false,
          active: [true, true, true],
        },
        {
          numberText: '4',
          beforBG: false,
          active: [true, false, true],
        },
        {
          numberText: '5',
          beforBG: false,
          active: [false, false, false],
        }
      ],
      usbPortTitle: '1x USB-A 2.01x / USB-A 3.1 Gen2 /1x USB-C 3.1 Gen2',
      monitorPortTitle: '1x Mini DisplayPort 1.2 / 1x HDMI'
    },
    {
      title: 'laptop 2 pb51',
      category: 's-serie',
      secondCategory: '\u00A0',
      toggleClass: 'ml-[-100%] w-[400%]',
      wrapperCategoryClass: 'pt-[12px] px-[29px] lg:px-[26px] pb-[6px] top-[42.8%] left-[-5%] md:left-[-3%] lg:top-[40.5%] xl:left-[22.9%] lg:left-[23.9%] skew-x-[-28deg]',
      categotyClass: 'skew-x-[28deg] lg:mr-[38px] ml-[12px] lg:ml-0',
      backGround: 'bg-gamingLaptopsBlockS-SeriesBG',
      titleCategory: 'Perfomance',
      laptopItemBG: 'bg-gamingLaptopsBlockLaptop_block_S-serie',
      acordionCharData: [
        {
          numberText: '1',
          beforBG: true,
          active: [true, true, true],
        },
        {
          numberText: '2',
          beforBG: false,
          active: [true, true, true],
        },
        {
          numberText: '3',
          beforBG: false,
          active: [true, true, true],
        },
        {
          numberText: '4',
          beforBG: false,
          active: [true, false, true],
        },
        {
          numberText: '5',
          beforBG: false,
          active: [false, false, true],
        }
      ],
      usbPortTitle: '2x USB-A 2.01x / USB-A 3.1 Gen2 /1x USB-C 3.1 Gen2',
      monitorPortTitle: '2x Mini DisplayPort 1.2 / 1x HDMI'
    },
    {
      title: 'laptop 3 (max-q design) eg7 i7',
      category: 's-serie',
      secondCategory: '(max-q design)',
      toggleClass: 'ml-[-200%] w-[400%]',
      wrapperCategoryClass: 'lg:pt-[12px] pt-[7px] lg:px-[26px] pl-[26px] pr-[22px] pb-[9px] lg:pb-[6px] top-[48%] left-[-5%] md:left-[-3%] lg:top-[40.5%] xl:left-[32.1%] lg:left-[34.1%] skew-x-[-28deg]',
      categotyClass: 'skew-x-[28deg] lg:mr-[40px] ml-[6px]',
      categorySecondClass: 'lg:ml-[-24px] ml-[15px] skew-x-[28deg]',
      backGround: 'bg-gamingLaptopsBlockE-SeriesBG',
      titleCategory: 'Perfomance',
      laptopItemBG: 'bg-gamingLaptopsBlockLaptop_block_S-MaxQ_serie',
      acordionCharData: [
        {
          numberText: '1',
          beforBG: true,
          active: [true, true, true],
        },
        {
          numberText: '2',
          beforBG: false,
          active: [true, true, true],
        },
        {
          numberText: '3',
          beforBG: false,
          active: [true, true, true],
        },
        {
          numberText: '4',
          beforBG: false,
          active: [true, true, true],
        },
        {
          numberText: '5',
          beforBG: false,
          active: [true, true, true],
        }
      ],
      usbPortTitle: '1x USB-A 2.01x / USB-A 3.1 Gen2 /2x USB-C 3.1 Gen2',
      monitorPortTitle: '1x Mini DisplayPort 1.2 / 2x HDMI'
    },
    {
      title: 'laptop 4 (max-q design) pb51',
      category: 'x-serie',
      secondCategory: '(max-q design)',
      toggleClass: 'ml-[-300%] w-[400%]',
      wrapperCategoryClass: 'lg:pt-[12px] pt-[7px] lg:px-[26px] pl-[26px] pr-[22px] pb-[9px] lg:pb-[6px] skew-x-[-28deg] lg:skew-x-[0deg] top-[53.1%] left-[-5%] md:left-[-3%] lg:top-[40.5%] xl:left-[41.2%] lg:left-[44.2%] ',
      categotyClass: 'skew-x-[28deg] lg:skew-x-[0deg] ml-[6px]',
      categorySecondClass: 'lg:skew-x-[0deg] skew-x-[28deg] ml-[15px] lg:ml-[5px]',
      backGround: 'bg-gamingLaptopsBlockX-SeriesBG',
      titleCategory: 'Perfomance',
      laptopItemBG: 'bg-gamingLaptopsBlockLaptop_Block_x-Serie',
      acordionCharData: [
        {
          numberText: '1',
          beforBG: true,
          active: [true, true, true],
        },
        {
          numberText: '2',
          beforBG: false,
          active: [true, true, true],
        },
        {
          numberText: '3',
          beforBG: false,
          active: [true, true, true],
        },
        {
          numberText: '4',
          beforBG: false,
          active: [true, true, true],
        },
        {
          numberText: '5',
          beforBG: false,
          active: [false, true, true],
        }
      ],
      usbPortTitle: '1x USB-A 2.01x / USB-A 3.1 Gen2 /2x USB-C 3.1 Gen2',
      monitorPortTitle: '2x Mini DisplayPort 1.2 / 1x HDMI'
    }
  ];

  useEffect(() => {
    const gamingLaptopsBlockTimer = setTimeout(() => {
      setShowGamingLaptopsBlock(!showGamingLaptopsBlock)
    }, 6000)
    return () => clearTimeout(gamingLaptopsBlockTimer);
  }, []);

  return (<>
    {showGamingLaptopsBlock ?
      <div className='grid grid-cols-4'>
        {acordionData.map((data, index) => {
          return <>
            <div className={data.toggleClass + ' relative'}>
              <div className={open === index ? data.wrapperCategoryClass + ' bg-black border border-[#202020] leading-none text-center mb-[10px] uppercase cursor-pointer absolute z-50' :
                data.wrapperCategoryClass + ' bg-[#2c2c2c] border border-[#202020] leading-none text-center mb-[10px] uppercase cursor-pointer absolute z-50'} onClick={() => toggle(index)}>
                <p className={data.categotyClass + ' text-[16px]'}>{data.category}</p>
                <p className={data.categorySecondClass + ' text-[8px]'}>{data.secondCategory}</p>
              </div>
              <Collapse isOpened={open === index} className='overflow-hidden'>
                <div className={data.backGround + ' bg-top bg-no-repeat h-[971px] es:h-[952px] lg:h-[751px] leading-none uppercase overflow-hidden z-0'}>
                  <div className='bg-opacity-30 bg-black px-[10px] py-[30px] lg:py-[0px] lg:h-[348px] es:h-[359px] md:h-[358px] h-[366px]'>
                    <h2 className='font-EurostileBol text-[1.4em] lg:text-[40px] lg:mb-[50px] text-center'>Angepasst an deine Bedürfnisse</h2>
                    <div className='lg:ml-[14.5%] mt-[51px] lg:mt-0 text-center lg:text-left'>
                      <h3 className='font-EurostileBol lg:text-[30px] mb-[35px] text-[1.2em]'>{data.title}</h3>
                      <p className='text-[16px] leading-[1.3] normal-case mb-[20px]'>Schließe Deine Peripheriegeräte über die schnellen <b className='Eurostile-Bol'>USB 3.0-Ports</b> an , und , <br />
                        erlebe Dein Spiel auf bis zu <b className='Eurostile-Bol'>3 Monitore</b> über HDMI oder DisplayPort.</p>
                      <p className='text-[16px] leading-[1.3] normal-case mb-[20px]'>High-Speed-Ethernet oder Wireless-AC sind natürlich auch mit von der Partie.</p>
                    </div>
                  </div>
                  <div className='bg-gradient-to-r from-blackStart to-blackEnd px-[10px] h-[606px] lg:h-[447px] relative'>
                    <div className='pt-[270px] lg:ml-[14.5%] lg:pt-[35px] lg:w-[420px] md:w-[420px] md:m-auto '>
                      <p className='text-[16px] lg:text-[24px] font-EurostileBol'>Perfomance</p>
                      <div className='pt-[25px] grid grid-cols-5'>
                        {data.acordionCharData.map((data, index) => {
                          return <AcordionItem key={index} numberText={data.numberText} beforBG={data.beforBG} active={data.active[0]}></AcordionItem>
                        })}
                      </div>
                      <p className='text-[16px] lg:text-[24px] mt-[30px] font-EurostileBol'>Anschlüsse</p>
                      <div className='pt-[25px] grid grid-cols-5'>
                        {data.acordionCharData.map((data, index) => {
                          return <AcordionItem key={index} numberText={data.numberText} beforBG={data.beforBG} active={data.active[1]}></AcordionItem>
                        })}
                      </div>
                      <p className='text-[16px] lg:text-[24px] mt-[30px] font-EurostileBol'>Mobilität</p>
                      <div className='pt-[25px] grid grid-cols-5'>
                        {data.acordionCharData.map((data, index) => {
                          return <AcordionItem key={index} numberText={data.numberText} beforBG={data.beforBG} active={data.active[2]}></AcordionItem>
                        })}
                      </div>
                      <p className='flex mt-[37px]'>
                        <span className='w-[15px] h-[23px] bg-gamingLaptopsBlockUSB_ICON bg-no-repaet ml-[-4px] bg-100%'></span>
                        <span className='font-EurostileBol text-[12px] lg:text-[15px] text-[#666] normal-case ml-[11px] mt-[5px]'>{data.usbPortTitle}</span>
                      </p>
                      <p className='flex mt-[12px]'>
                        <span className='w-[36px] h-[9px] bg-gamingLaptopsBlockPorts_icon bg-100% bg-no-repaet ml-[-13px] mt-[7px]'></span>
                        <span className='font-EurostileBol text-[12px] lg:text-[15px] text-[#666] normal-case mt-[4px]'>{data.monitorPortTitle}</span>
                      </p>
                    </div>
                    <div className={data.laptopItemBG + ' absolute bg-no-repeat bg-90% xl:right-[-9.5%] lg:right-[-23.5%] md:right-[30%] lg:top-[-23%] right-[-25%] top-[-6.5%] bottom-[4%] w-[378px] h-[257px] lg:w-[806px] lg:h-[532px]'}></div>
                  </div>
                </div>
              </Collapse>
            </div>
          </>
        })}
      </div> : null
    }
  </>);
};

export default GamingLaptopsBlock;