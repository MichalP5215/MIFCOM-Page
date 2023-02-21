/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { InterfaceHeaderBlock } from './types';

const HeaderBlock: React.FunctionComponent<InterfaceHeaderBlock> = (props) => {
  const [showBacgroundImage, setShowBacgroundImage] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showHeadingFooter, setShowHeadingFooter] = useState(false);
  const [showHeadingFooterTitle, setShowHeadingFooterTitle] = useState(false);
  const [showHeadingFooterSubtitle, setShowHeadingFooterSubtitle] = useState(false);
  const [showHeadingEffect, setShowHeadingEfect] = useState(false);
  const [showIntelLogo, setShowIntelLogo] = useState(false);
  const [showNvidiaLogo, setShowNvidiaLogo] = useState(false);

  useEffect(() => {
    const headerTimer = setTimeout(() => {
      setShowBacgroundImage(!showBacgroundImage)
    }, 2600)
    const headingTimer = setTimeout(() => {
      setShowHeading(!showHeading)
    }, 3000)
    const headingFooterTimer = setTimeout(() => {
      setShowHeadingFooter(!showHeadingFooter)
    }, 4000)
    const headingFooterTitleTimer = setTimeout(() => {
      setShowHeadingFooterTitle(!showHeadingFooterTitle)
    }, 4500)
    const headingFooterDescriptionTimer = setTimeout(() => {
      setShowHeadingFooterSubtitle(!showHeadingFooterSubtitle)
    }, 5000)
    const headingShowEffect = setTimeout(() => {
      setShowHeadingEfect(!showHeadingEffect)
    }, 2600)
    const headingShowIntelLogo = setTimeout(() => {
      setShowIntelLogo(!showIntelLogo)
    }, 1800)
    const headingShowNvidiaLogo = setTimeout(() => {
      setShowNvidiaLogo(!showNvidiaLogo)
    }, 2200)
    //  return () => clearTimeout(() => {
    //    headerTimer});   
  }, []);


  return (<>
    <div className='container h-[621px] md:h-[805px] lg:h-[870px] m-auto relative'>
      {showBacgroundImage ?
        <div className={'bg-headerBG bg-top bg-no-repeat h-[621px] md:h-[805px] lg:h-[859px] leading-none uppercase text-center z-20 animate-fade3'}>
          {showHeading ?
            <div className='pt-[60px] animate-fade4'>
              <h2 className='text-[1.4em] lg:text-[2.6em] mb-[5px] lg:mb-0'>
                <span className='font-EurostileHeavy'>nxt</span>gen perfomance</h2>
              <h1 className='font-EurostileHeavy text-[2.5em] lg:text-[4.4em]'>Gaming Laptops</h1>
            </div> : null}
          <div className='pt-[304px] md:pt-[488px] lg:pt-[482px] text-[1.4em] lg:text-[40px] lg:pl-[1.8rem]'>
            {showHeadingFooter ? <h2 className='font-EurostileHeavy lg:font-EurostileReg animate-slideUp'>Performance Laptops</h2> : null}
            {showHeadingFooterTitle ? <h1 className='lg:font-EurostileHeavy mt-[4px] lg:mt-0 animate-slideUp'>der nächsten Generation</h1> : null}
            {showHeadingFooterSubtitle ?
              <p className='text-[14px] lg:text-[22px] px-[9px] sm:px-[10px] mt-[21px] lg:mt-[27px] lg:mr-[15px] lg:pl-0 text-gray normal-case leading-normal lg:leading-[1.2] max-w-xs sm:max-w-sm lg:max-w-none m-auto animate-slideUp'>
                Leistung auf Desktop-Niveau – für ein großartiges Spielerlebnis mit den neuesten<br className='hidden lg:block' />
                AAA-Titeln. Spielen, Aufnehmen, Streamen ohne Kompromisse – jetzt auch auf Laptops<br className='hidden lg:block' />
                mit Intel® Core™-Prozessoren der 9. Generation.
              </p> : null}
          </div>
        </div> : null}
      <div className='w-[320px] md:w-[750px] lg:w-[1024px] xl:w-[1220px] h-[320px] absolute top-[27.2%] md:top-[20.2%] lg:top-[17.5%] xl:left-[0%] es:left-[8%] sm:left-[14%] md:left-[1%] lg:left-[-4%] z-40'>
        <div className="bg-headeLaptopLeft bg-106% bg-no-repeat w-[189px] md:w-[447px] lg:w-[630px] h-[165px] md:h-[313px] lg:h-[445px] absolute left-[-3%] xl:left-[9%] z-40 xl:animate-moveRight animate-grayscale">
          <div className='hidden xl:block bg-headeLaptopLeftScreen bg-no-repeat w-[350px] h-[270px] absolute left-[42.5%] top-[8.4%]'></div>
          <div className='bg-headeLaptopLeftScreenBlink bg-100% bg-no-repeat w-[250px] md:w-[467px] lg:w-[660px] h-[150px] absolute top-[-10%] left-[1%] md:left-[15%] brightness-100'></div>
          {showHeadingEffect ?
            <div className='bg-headeLaptopLeftScreenEffect bg-75% bg-no-repeat w-[250px] md:w-[460px] lg:w-[732px] h-[120px] md:h-[289px] lg:h-[408px] absolute top-[-4.1%] md:top-[1.9%] left-[31.6%] md:left-[42.6%] animate-fade3'></div> : null}
          <div className='hidden lg:block w-[67px] h-[48px] absolute left-[1%] top-[24.2%] lg:left-[102%]  bg-black skew-x-minus24 uppercase'>
            <div className='absolute bg-black h-[48px] w-[67px] skew-x-24 left-[-14px] top-[0px] text-center pl-[4px] pt-[8px] leading-none'>
              <span className='font-EurostileBol text-[16px]'>s-serie</span><br />
              <span className='text-[12px]'>p960</span>
            </div>
          </div>
        </div>
        <div className="bg-headeLaptopRight bg-100% bg-no-repeat w-[134px] h-[165px] md:w-[326px] md:h-[239px] lg:w-[455px] lg:h-[330px] absolute left-[49%] top-[8%] md:top-[19%] lg:top-[14.3%] lg:left-[53%] z-30 xl:animate-moveLeft animate-grayscale">
          {showIntelLogo ?
            <div className='bg-intelLogo bg-100% bg-no-repeat w-[131px] lg:w-[167px] h-[71px] absolute top-[79.9%] md:top-[120.1%] lg:top-[101.7%] left-[-89%] md:left-[-35%] lg:left-[14.7%] animate-fade3 '></div> : null}
          {showNvidiaLogo ?
            <div className='bg-nvidiaLogo bg-93% bg-no-repeat w-[91px] lg:w-[167px] h-[51px] absolute top-[87.5%] md:top-[125.7%] lg:top-[105.3%] left-[26.2%] md:left-[13%] lg:left-[56.8%] animate-fade3'></div> : null}
        </div>
      </div>
    </div>
  </>);
};

export default HeaderBlock;