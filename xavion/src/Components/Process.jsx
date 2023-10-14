/* eslint-disable react/prop-types */
import xavionLogo from '../assets/cropped-Favicon-png-32x32.png'

const Process = () => {
    return ( 
        <section className="text-center my-10 ">
            <h5 className="uppercase font-semibold text-xs py-3">How it works</h5>
            <h1 className="text-2xl font-semibold">Investing with Xavion Energy can be so easy</h1>
              <article className='lg:flex'>
               <Step
                 head='Create an account'
                 info='Fill in all the required details then submit.'
                />

               <Step
                 head='Chose a project to invest in'
                 info='Go through our Investment Projects. Select your choice and enter the amount you want to invest. The minimum you can invest is $500.'
                />

               <Step
                 head='You make impact'
                 info='Electricity generated from your Solar Project & Gas/oil generated from your oil well project is sold.'
                />

               <Step
                 head='You earn'
                 info='The money made from your impact is paid to you as dividends. So, at the end of the investment period you get your profit and your capital back. You can reinvest in other energy projects'
                />
             </article>
 
        </section>
     );
}
 
export default Process;

function Step({head, info}) {
    return (
        <article className='step flex p-3 my-5 lg:w-1/4 px-2'>
            <img src={xavionLogo} alt="xavionlogo" className='object-contain mt-2'/>

          <div className='text-left pl-5'>
            <h3 className='text-lg font-semibold'>{head}</h3>
            <p className='text-neutral-700'>{info}</p>
          </div>
        </article>
      );
}