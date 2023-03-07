/* eslint-disable */
import React from 'react';

interface acordionItemProps {
    numberText?: string;
    active?: boolean;
    beforBG: boolean;
}

const acordionItem: React.FunctionComponent<acordionItemProps> = ({ numberText, active, beforBG }) => {
    return (<>
        <div className={active ? 'w-[57px] h-[7px] es:w-[69px] sm:w-[77px] lg:w-[82px] lg:h-[10px] bg-[#540707] skew-x-[-35deg]' : 'w-[57px] h-[7px] es:w-[69px] sm:w-[77px] lg:w-[82px] lg:h-[10px] bg-[#212121] skew-x-[-35deg]'}>
            {beforBG ? <div className={active ? 'bg-[#540707] w-[10%] h-[7px] lg:h-[10px] absolute left-[-5%] skew-x-[35deg]'
                : 'bg-[#212121] w-[10%] h-[7px] lg:h-[10px] absolute left-[-5%] skew-x-[35deg]'}></div> : null}
            <span className='text-center absolute m-auto left-0 right-[30%] bottom-[calc(100%_+_4px)] skew-x-[35deg] text-[13px]'>{numberText}</span>
        </div>
    </>);
};

export default acordionItem;
