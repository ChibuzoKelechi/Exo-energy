import { FaOilWell, FaSolarPanel} from "react-icons/fa6";
import Button from "../Components/Button";

/* eslint-disable react/prop-types*/
function InfoAssets() {
    return ( 
       <section className="assets mt-3">
        <article className="p-4 pl-10">
         <h5 className="text-xs tracking-wide my-2">AT XAVION ENERGY,</h5>
         <h2 className="py-3 text-2xl font-bold">You earn money owning Energy Assets</h2>
         <p className="text-sm text-neutral-600 tracking-wide">
          Xavion Energy was formed with the intention of giving investors access to the most productive and profitable solar, oil/gas investment opportunities. We actively participate in the development of solar farms and drilling of oil wells and gas fields in an effort to generate long term income for investors.
         </p>
        </article>

          <Invest 
            heading="Oil and Gas investments"
            text='You can sponsor a portion of our gas/oil well drilling projects with your investment capital and earn dividends daily.'
            icon={<FaOilWell style={{color:"black", fontSize:'40px', cursor:'pointer'}}/>}
          />

          <Invest
            heading='Solar Energy Investments'
            text='You can sponsor a portion of our solar farm projects with your investment capital and earn dividends daily.'
            icon={<FaSolarPanel className='icon' style={{color:"black", fontSize:'40px', cursor:'pointer'}}/>}
          />

        <Button 
         className='ml-4 bg-black p-4 text-white rounded-md text-xs font-semibold 
         bg-gradient-to-r from-blue-500 to-green-400'
         text='LEARN MORE'
        />
        
       </section>
     );
}

export default InfoAssets;

const Invest = ({heading, text, icon}) => {
  return ( 
    <article className="flex my-3 px-5 py-3 justify-center align-middle">
      
     <div className="w-1/4 mt-4">
      {icon}
     </div>

      <div className="pl-3">
        <h2 className="py-3 text-xl font-bold">{heading}</h2>
        <p>{text}</p>
      </div>

    </article>
   );
}
 