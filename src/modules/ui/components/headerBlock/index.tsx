/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { InterfaceHeaderBlock } from './types';

const HeaderBlock: React.FunctionComponent<InterfaceHeaderBlock> = (props) => {
  const [showBacgroundImage, setShowBacgroundImage] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showHeadingFooter, setShowHeadingFooter] = useState(false);
  const [showHeadingFooterTitle, setShowHeadingFooterTitle] = useState(false);
  const [showHeadingFooterSubtitle, setShowHeadingFooterSubtitle] = useState(false);

  useEffect(() => {
    const headerTimer = setTimeout(() => {
      setShowBacgroundImage(!showBacgroundImage)
      console.log('show HEADER');
    }, 3000)//3000
    return () => clearTimeout(headerTimer);
  }, []);
  useEffect(() => {
    const headingTimer = setTimeout(() => {
      setShowHeading(!showHeading)
      console.log('show Heading');
    }, 5000)//5000
    return () => clearTimeout(headingTimer);
  }, []);
  useEffect(() => {
    const headingFooterTimer = setTimeout(() => {
      setShowHeadingFooter(!showHeadingFooter)
      console.log('show Heading');
    }, 6000)//5000
    return () => clearTimeout(headingFooterTimer);
  }, []);
  useEffect(() => {
    const headingFooterTitleTimer = setTimeout(() => {
      setShowHeadingFooterTitle(!showHeadingFooterTitle)
      console.log('show Heading');
    }, 7000)//5000
    return () => clearTimeout(headingFooterTitleTimer);
  }, []);
  useEffect(() => {
    const headingFooterDescriptionTimer = setTimeout(() => {
      setShowHeadingFooterSubtitle(!showHeadingFooterSubtitle)
      console.log('show Heading');
    }, 8000)//5000
    return () => clearTimeout(headingFooterDescriptionTimer);
  }, []);

  return (<>
    <div className='container'>
      {showBacgroundImage ?
        <div className={'animate-fade3 bg-headerBG h-[90vh] leading-none uppercase justify-center text-center'}>
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
    </div>
  </>);
};

export default HeaderBlock;
