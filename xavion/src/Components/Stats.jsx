/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaDollarSign, FaOilCan, FaPeopleGroup, FaPerson} from "react-icons/fa6";

const Stats = () => {
    return ( 
       <article className="bg-[#03cc46] m-3 rounded-xl p-5">

         <StatValue 
          icon={<FaDollarSign style={{color:"white", fontSize:'40px'}}/>}
          count='3'
          title='total investors'
          unit='B+'
         />

        <StatValue 
          icon={<FaOilCan style={{color:"white", fontSize:'40px'}}/>}
          count='500'
          title='completed projects'
          unit='+'
         />

        <StatValue 
          icon={<FaPerson style={{color:"white", fontSize:'40px'}}/>}
          count='100'
          title='energy investors'
          unit='K+'
         />

       <StatValue 
          icon={<FaPeopleGroup style={{color:"white", fontSize:'40px'}}/>}
          count='100'
          title='expert teams'
          unit='K+'
         />

       </article>
     );
}
 
export default Stats;

function Counter({ targetValue, unit}) {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const maxCount = targetValue;
      if (count < maxCount) {
        const id = window.setTimeout(() => setCount(count + 1), 50);
        return () => window.clearTimeout(id);
      }
    }, [count, targetValue]);
  
    return <div>{count} {unit} </div>;
  }

  function StatValue({icon, title, count, unit}) {
    return ( 
        <div className="flex text-white my-8 mb-2">
          <div>
            {icon}
          </div>
          <div className="pl-3">
            <h1 className="text-3xl font-bold">
              <Counter targetValue={count} unit={unit}/> 
                
            </h1>
            <p className="uppercase text-xs font-semibold">{title}</p>
          </div> 
         
        </div>
     );
  }