/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa6";

const Stats = () => {
    return ( 
       <article className="bg-green-500 m-3 rounded-lg">

         <StatValue 
          icon={<FaDollarSign/>}
          count='3'
          title='TOTAL INVESTMENTS'
          unit='B+'
         />

        <StatValue 
          icon={<FaDollarSign/>}
          count='500'
          title='COMPLETED PROJECTS'
          unit='+'
         />

        <StatValue 
          icon={<FaDollarSign/>}
          count='100'
          title='ENERGY INVESTORS'
          unit='K+'

         />
       </article>
     );
}
 
export default Stats;

function Counter({ targetValue }) {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const maxCount = targetValue;
      if (count < maxCount) {
        const id = window.setTimeout(() => setCount(count + 1), 50);
        return () => window.clearTimeout(id);
      }
    }, [count, targetValue]);
  
    return <div>{count}</div>;
  }

  function StatValue({icon, title, count, unit}) {
    return ( 
        <div className="flex text-white">
          <div>
            {icon}
          </div>
          <div className="">
            <h1>
              <Counter targetValue={count} />{unit}
                
            </h1>
            <p>{title}</p>
          </div> 
         
        </div>
     );
  }