import React from 'react';
import ComparisonBlock from '../../modules/ui/components/comparisonBlock';
import FooterBlock from '../../modules/ui/components/footerBlock';
import GamingLaptopsBlock from '../../modules/ui/components/gamingLaptopsBlock';
import HeaderBlock from '../../modules/ui/components/headerBlock';
import IntelBlock from '../../modules/ui/components/intelBlock';
import NvidiaBlock from '../../modules/ui/components/nvidiaBlock';
import YoutubeBlock from '../../modules/ui/components/youtubeBlock';

const Homepage: React.FunctionComponent = () => {

  return (<>
    <HeaderBlock />
    <YoutubeBlock />
    <IntelBlock />
    <NvidiaBlock />
    <GamingLaptopsBlock />
    <ComparisonBlock />
    <FooterBlock />
  </>
  );
};

export default Homepage;
