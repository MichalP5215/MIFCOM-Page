/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { InterfaceComparisonBlock } from './types';

const ComparisonBlock: React.FunctionComponent<InterfaceComparisonBlock> = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const tableData = [
    {
      title: 'cpu',
      backGround: 'bg-iconCPU'
    },
    {
      title: 'gpu',
      backGround: 'bg-iconGPU'
    },
    {
      title: 'ram',
      backGround: 'bg-iconRAM'
    },
    {
      title: 'ssd/hdd',
      backGround: 'bg-iconSSD'
    },
    {
      title: 'keyboard',
      backGround: 'bg-iconKEYBOARD  bg-77%'
    },
    {
      title: 'auflösun',
      backGround: 'bg-iconRESOLUTION'
    },
    {
      title: 'thunderbolt',
      backGround: 'bg-iconTHUNDER bg-77%'
    },
    {
      title: 'usb-ports',
      backGround: 'bg-iconUSB'
    },
    {
      title: 'bildausgang',
      backGround: 'bg-iconPORT bg-77%'
    },
    {
      title: 'sonstige',
      backGround: 'bg-iconSPEAKER'
    },
    {
      title: 'gewicht',
      backGround: 'bg-iconWEIGHT bg-75%'
    }
  ]

  const apiGet = () => {
    setIsLoading(true)
    fetch("https://dev-new-compass.mifcom.de/testing/getconfigs")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setIsLoading(false)
        setData(data)
      })
      .catch(error => {
        console.log('error made: ', error);
      });
  }

  useEffect(() => {
    apiGet()
  }, [])

  return (<>
    <div className='mt-[60px] mb-[20px] uppercase overflow-hidden text-center '>
      <h2 className='font-EurostileBol text-[1.4em] lg:text-[2.5em] leading-none pl-[1.8rem]'>
        Konfiguriere deinen <br />
        Persönlichen Laptop
      </h2>
    </div>
    <div>

      <div className='flex pt-[45px] justify-center '>

        <div className='mt-[344px] ml-[9px]'>
          {tableData.map((data, index) => {
            return <>
              <div className='flex mt-5 h-[36px] items-center'>
                <span className={'w-[33px] h-[23px] bg-no-repeat ' + data.backGround}></span>
                <span className='uppercase font-EurostileBol text-[13px]'>{data.title}</span>
              </div>
            </>
          })}
        </div>
        {isLoading && <p>Loading...</p>}
        {data.length > 0 ?
          <div className='flex '>
            {data?.map((item: InterfaceComparisonBlock) => (
              <>
                <div className='w-[264px] mx-[2.5px]'>
                  <p className='text-[18px] font-EurostileBol z-2 mb-4 uppercase text-center'>{item.name}</p>
                  <img className='m-auto h-[156px]' src={item.imagePath}></img>
                  <p className='h-[62px] mt-[15px] font-EurostileMed text-[14px] leading-3 text-[#c2c2c2] border-b border-[#3c3c3c]'>{item.description}</p>
                  <div className={'w-[52px] h-[52px] ' + item.features?.toString().replace(/,/g, " ")}></div>
                  {item.items?.map((data, index) => {
                     const isBigColumn = index === 4 || index === 5 || index === 8 ? "min-h-[64px]" : " "
                    return <>
                      <div className={'mb-[3px] font-Arial odd:bg-[#1e1e1e] flex items-center leading-3 min-h-[52px] pt-[8px] px-[12px] pb-[5px] bg-[#0b0b0b] text-[13px] text-[#666] ' + isBigColumn}>
                        <p className='mr-[.5rem]'>{data.description}</p>
                        {data.features ? <div className={'mx-[8px] ' + data.features}></div> : null}
                      </div>
                    </>
                  })}

                </div>
              </>
            ))}
          </div> : null
        }

      </div>
    </div>

  </>);
};

export default ComparisonBlock;