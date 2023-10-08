/* eslint-disable react/prop-types */
import { FaOilCan, FaInfinity } from 'react-icons/fa6';
import Button from './Button'
import { FaCheck } from "react-icons/fa";

const ProjectPlans = () => {
    return ( 
        <section className="text-center text-white bg-[#120ef7] p-3">
         <div className="tracking-wider mb-5 font-semibold">
            <h2 className="text-xs pt-5">SOLAR, OIL & GAS WELL PROJECTS CURRENTLY OPEN FOR INVESTMENTS</h2>
             <h1 className=" text-2xl py-5">Investment Projects</h1>
         </div>

         <Plan
           tier='Lite'
           icon={<FaOilCan style={{color: 'white', fontSize: '30px'}}/>}
           min='$500'
           max='$9,999'
           dividend='1%'
           period='90 Days'
         />

        <Plan
           tier='Premium'
           icon={<FaOilCan style={{color: 'white', fontSize: '30px'}}/>}
           min='$10,000'
           max='$49,999'
           dividend='1.1%'
           period='90 Days'
        />
       

         <Plan
           tier='Deluxe'
           icon={<FaOilCan style={{color: 'white', fontSize: '30px'}}/>}
           min='$50,000'
           max='$499,999'
           dividend='1.5%'
           period='120 Days'
         />
         
         
       <Plan
        tier='Super'
        icon={<FaOilCan style={{color: 'white', fontSize: '30px'}}/>}
        min='$500,000'
        max={<FaInfinity style={{color: 'black', paddingLeft: '10px', paddingTop:'5px'}}/>}
        dividend='1%'
        period='90 Days'
      />
         


        </section>
     );
}
 
export default ProjectPlans;


function Plan({tier, icon, max, min, dividend, period}) {
    return (  
        <article className="bg-white text-black my-10 py-10 rounded-xl shadow-lg hover:shadow-5xl mx-auto w-4/5">
          
          <div className=''>
            <h1 className='text-xl font-semibold'>XAV- {tier}</h1>
            <div className="icon rounded-full bg-[#120ef7] my-2 w-12 h-12">{icon}</div>
            <h1 className='text-3xl font-bold flex justify-center flex-nowrap'>{min} - {max}</h1>
          </div>
          
          <div className='flex flex-col justify-center features'>
            <p>
             <FaCheck style={{color: '#120ef7'}}/> <h2>Daily Dividends: {dividend}</h2>
            </p>

            <p>
             <FaCheck style={{color: '#120ef7'}}/> <h2>Minimum Investment: {min}</h2>
            </p>

            <p>
              <FaCheck  style={{color: '#120ef7'}}/> <h2>Maximum Investment: {max}</h2>
            </p>

            <p>
              <FaCheck style={{color: '#120ef7'}}/> <h2>Contract Period: {period}</h2>
            </p>

          </div>
        
          <Button
           text='invest now'
           className='hover:text-white hover:bg-[#120ef7] transition-all m-1 uppercase border p-2 bg-white text-inherit font-bold hover:shadow-xl'
          />

        </article>
    );
}