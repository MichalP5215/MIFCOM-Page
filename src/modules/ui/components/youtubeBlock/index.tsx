/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { InterfaceYoutubeBlock } from './types';

const YoutubeBlock: React.FunctionComponent<InterfaceYoutubeBlock> = (props) => {
  const [showYoutubePlayer, setShowYoutubePlayer] = useState(false);

  useEffect(() => {
    const youtubePlayerTimer = setTimeout(() => {
      setShowYoutubePlayer(!showYoutubePlayer)
    }, 6000)
    return () => clearTimeout(youtubePlayerTimer);
  }, []);

  return (<>
    {showYoutubePlayer ?
      <div className='h-[150px] md:h-[356px] lg:h-[565px]'>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="GeForce Laptops: Worker by Day. Warrior by Night."
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/3aQUK81ifyo?controls=1&amp;showinfo=0&amp;rel=0&amp;autoplay=0&amp;loop=0&amp;fs=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2F2193176.fz322059.web.hosting-test.net&amp;widgetid=1"
          id="widget2">
        </iframe>
      </div> : null}
  </>);
};

export default YoutubeBlock;
