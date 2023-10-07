/* eslint-disable react/prop-types */
import { FaOilCan } from 'react-icons/fa6';
import Button from './Button'
import { FaCheck } from "react-icons/fa";

const ProjectPlans = () => {
    return ( 
        <section className="text-center text-white bg-[#120ef7]">
         <div className="tracking-wider mb-5 font-semibold">
            <h2 className="text-xs pt-5">SOLAR, OIL & GAS WELL PROJECTS CURRENTLY OPEN FOR INVESTMENTS</h2>
             <h1 className=" text-2xl py-5">Investment Projects</h1>
         </div>

         <Plan
           tier='Lite'
           icon={<FaOilCan/>}
           min='$500'
           max='$9,999'
           dividend='1%'
           period='90 Days'
         />

        </section>
     );
}
 
export default ProjectPlans;


function Plan({tier, icon, max, min, dividend, period}) {
    return (  
        <article className="bg-white">
          
          <div>
            <h1>XAV- {tier}</h1>
            <div className="rounded-full p-5">{icon}</div>
            <h1>$ {min} - {max}</h1>
          </div>
          
          <div>
            <p>
             <FaCheck/>Daily Dividends: {dividend}
            </p>

            <p>
             <FaCheck/>Minimum Investment: {min}
            </p>

            <p>
              <FaCheck/>Maximum Investment: {max}
            </p>

            <p>
              <FaCheck/>Contract Period: {period}
            </p>
          </div>
        
          <Button
           text='invest now'
           className='uppercase border-blue-700 bg-white text-inherit'
          />
        </article>
    );
}