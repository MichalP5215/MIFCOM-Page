/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { InterfaceComparisonBlock } from './types';

const ComparisonBlock: React.FunctionComponent<InterfaceComparisonBlock> = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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

  console.log('co to kurwa', data)

  return (<>
    <div className='mt-[60px] mb-[20px] uppercase overflow-hidden text-center '>
      <h2 className='font-EurostileBol text-[1.4em] lg:text-[2.5em] lg:mb-[50px] leading-none pl-[1.8rem]'>
        Konfiguriere deinen <br />
        Persönlichen Laptop
      </h2>
    </div>
    <div>
      <div>
        {isLoading && <p>Loading...</p>}
        {data.length > 0 ? 
          <ul>
            {data?.map((item : InterfaceComparisonBlock) => (
              <li>{item.name}</li>
            ))}
          </ul> : null
        }
      
      </div>
    </div>

  </>);
};

export default ComparisonBlock;