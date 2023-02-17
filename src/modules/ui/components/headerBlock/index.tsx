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
    <div className='container lg:h-[870px] md:h-[805px] h-[621px] m-auto relative'>
      {showBacgroundImage ?
        <div className={'animate-fade3 bg-cover relative bg-headerBG bg-top bg-no-repeat h-[621px] md:h-[805px] lg:h-[859px] leading-none uppercase justify-center text-center z-20'}>
          {showHeading ?
            <div className='animate-fade4 pt-[60px]'>
              <h2 className='text-[1.4em] lg:text-[2.6em] mb-[5px] lg:mb-0'>
                <span className='font-EurostileHeavy'>nxt</span>gen perfomance</h2>
              <h1 className='font-EurostileHeavy lg:text-[4.4em] text-[2.5em]'>Gaming Laptops</h1>
            </div> : null}
          <div className='pt-[304px] md:pt-[488px] lg:pt-[482px] text-[1.4em] lg:text-[40px] lg:pl-[1.8rem]'>
            {showHeadingFooter ? <h2 className='font-EurostileHeavy lg:font-EurostileReg animate-slideUp'>Performance Laptops</h2> : null}
            {showHeadingFooterTitle ? <h1 className='lg:font-EurostileHeavy mt-[4px] lg:mt-0 animate-slideUp'>der nächsten Generation</h1> : null}
            {showHeadingFooterSubtitle ?
              <p className='animate-slideUp text-[14px] lg:text-[22px] pr-[9px] pl-[9px] mt-[21px] lg:mt-[27px] lg:mr-[15px] text-gray normal-case lg:pl-0 leading-normal lg:leading-[1.2]'>
                Leistung auf Desktop-Niveau – für ein großartiges Spielerlebnis mit den neuesten<br className='hidden lg:block'/>
                AAA-Titeln. Spielen, Aufnehmen, Streamen ohne Kompromisse – jetzt auch auf Laptops<br className='hidden lg:block' />
                mit Intel® Core™-Prozessoren der 9. Generation.
              </p> : null}
          </div>
        </div> : null}
      <div className='xl:w-[1220px] lg:w-[1024px] md:w-[750px] w-[320px] h-[320px] absolute top-[27.2%] lg:top-[17.5%] md:top-[20.2%] xl:left-[0%] lg:left-[-4%] es:left-[8%] sm:left-[14%] md:left-[1%] z-40'>
        <div className="bg-headeLaptopLeft bg-106% bg-no-repeat w-[189px] h-[165px] md:w-[441px] md:h-[313px] lg:w-[630px] lg:h-[445px] absolute left-[-3%] xl:left-[9%] z-40 xl:animate-moveRight animate-grayscale">
          <div className='hidden xl:block bg-headeLaptopLeftScreen bg-no-repeat w-[350px] h-[270px] absolute left-[42.5%] top-[8.4%]'></div>
          <div className='bg-headeLaptopLeftScreenBlink bg-100% bg-no-repeat lg:w-[660px] md:w-[467px] w-[250px] h-[150px] absolute left-[1%] md:left-[15%] top-[-10%] brightness-100'></div>
          {showHeadingEffect ?
            <div className='bg-headeLaptopLeftScreenEffect bg-75% bg-no-repeat w-[250px] h-[120px] md:w-[460px] md:h-[289px]  lg:w-[732px] lg:h-[408px] absolute left-[31.6%] top-[-4.1%] animate-fade3'></div> : null}
          <div className='hidden lg:block w-[67px] h-[48px] absolute lg:left-[102%] left-[1%] top-[24.2%] bg-black skew-x-minus24 uppercase'>
            <div className='absolute bg-black h-[48px] w-[67px] skew-x-24 left-[-14px] top-[0px] text-center pl-[4px] pt-[8px] leading-none'>
              <span className='font-EurostileBol text-[16px]'>s-serie</span><br />
              <span className='text-[12px]'>p960</span>
            </div>
          </div>
        </div>
        <div className="bg-headeLaptopRight bg-100% bg-no-repeat w-[134px] h-[165px] md:w-[326px] md:h-[239px] lg:w-[455px] lg:h-[330px] absolute left-[49%] top-[8%] lg:left-[53%] lg:top-[14.3%] z-30 xl:animate-moveLeft animate-grayscale">
          {showIntelLogo ?
            <div className='bg-intelLogo lg:bg-100% bg-100% bg-no-repeat w-[131px] lg:w-[167px] h-[71px] absolute left-[-89%] top-[79.9%] md:top-[135.1%] md:left-[-35%] lg:top-[102.1%] animate-fade3 '></div> : null}
          {showNvidiaLogo ?
            <div className='bg-nvidiaLogo lg:bg-93% bg-100% bg-no-repeat w-[91px] lg:w-[167px] h-[51px] absolute left-[26.2%] top-[87.5%] md:left-[13%] md:top-[140.5%] lg:left-[12.2%] lg:top-[105.5%] animate-fade3'></div> : null}
        </div>
      </div>
    </div>
  </>);
};

export default HeaderBlock;