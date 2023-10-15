/* eslint-disable react/prop-types */
import Button from "./Button";
const GetStarted = () => {
    return ( 
        <section className="bluecontainer px-10 pt-20 ">
           <Bluecard
            head='Want to own Energy Assets'
            text="Energy Investments are great opportunities for financial breakthrough. It's the future! Invest and secure your future today!! "
           />
        </section>
     );
}
 
export default GetStarted;

function Bluecard({head, text}) {
    return ( 
        <article className="bg-[#120ef7] w-5/7 rounded-lg p-10 mx-auto text-white">
          <h6 className="uppercase text-xs font-semibold">do you</h6>
          <h1 className="text-2xl py-1 font-bold">{head}</h1>
          <p className="text-sm text-neutral-200">{text}</p>

           <Button 
            text='get started'
            className='p-2 my-3 text-sm rounded-md font-semibold uppercase bg-[#03cc9a71]'/>
        </article>
     );
}