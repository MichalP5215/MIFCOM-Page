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
    <div className='container m-auto'>
      {showBacgroundImage ?
        <div className={'animate-fade3 relative bg-headerBG bg-no-repeat h-[870px] leading-none uppercase justify-center text-center'}>
          {showHeading ?
            <div className='animate-fade4 pt-[60px]'>
              <h2 className='text-[2.6em]'>
                <span className='font-EurostileHeavy'>nxt</span>gen perfomance</h2>
              <h1 className='font-EurostileHeavy text-[4.4em]'>Gaming Laptops</h1>
            </div> : null}
          <div className='pt-[482px] text-[40px] pl-[1.8rem]'>
            {showHeadingFooter ? <h2 className='animate-slideUp'>Performance Laptops</h2> : null}
            {showHeadingFooterTitle ? <h1 className='font-EurostileHeavy animate-slideUp'>der nächsten Generation</h1> : null}
            {showHeadingFooterSubtitle ? <p className='animate-slideUp text-[22px] mt-[27px] mr-7 text-gray normal-case pl-0 leading-[1.2]'>
              Leistung auf Desktop-Niveau – für ein großartiges Spielerlebnis mit den neuesten<br />
              AAA-Titeln. Spielen, Aufnehmen, Streamen ohne Kompromisse – jetzt auch auf Laptops<br />
              mit Intel® Core™-Prozessoren der 9. Generation.
            </p> : null}
          </div>
        </div> : null}
      <div className='w-[1220px] text-center  m-auto'>
        <div className="bg-headeLaptopLeft bg-no-repeat animate-moveRight absolute object-cover w-[630px] h-[445px] left-[23.8%] top-[16%] z-40">
          <div className='bg-headeLaptopLeftScreen bg-no-repeat absolute w-[350px] h-[270px] left-[42.5%] top-[8.4%]'></div>
          <div className='bg-headeLaptopLeftScreenBlink bg-no-repeat absolute brightness-200 w-[660px] h-[150px] left-[15%] top-[-10%]'></div>
          {showHeadingEffect ?
            <div className='bg-headeLaptopLeftScreenEffect bg-no-repeat bg-75% animate-fade3 absolute w-[732px] h-[408px] left-[31.6%] top-[-4.1%]'></div> : null}
          <div className='absolute w-[67px] h-[48px] left-[102%] top-[24.2%] bg-black skew-x-minus24 uppercase'>
            <div className='absolute bg-black h-[48px] w-[67px] skew-x-24 left-[-14px] top-[0px] text-center pl-[4px] pt-[8px] leading-none'>
              <span className='font-EurostileBol text-[16px]'>s-serie</span><br />
              <span className='text-[12px]'>p960</span>
            </div>
          </div>
        </div>
        <div className="bg-headeLaptopRight bg-no-repeat animate-moveLeft absolute object-cover w-[455px] h-[330px] left-[51.9%] top-[21%] z-0">
          {showIntelLogo ?
            <div className='bg-intelLogo animate-fade3 bg-no-repeat absolute w-[167px] h-[71px] left-[15%] top-[102.1%]'></div> : null}
          {showNvidiaLogo ?
            <div className='bg-nvidiaLogo animate-fade3 bg-no-repeat absolute bg-93% w-[167px] h-[51px] left-[57.2%] top-[105.5%]'></div> : null}
        </div>
      </div>
    </div>
  </>);
};

export default HeaderBlock;
