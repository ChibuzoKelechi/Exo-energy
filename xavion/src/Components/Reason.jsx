/* eslint-disable react/prop-types */
const Reason = ({text, head, number}) => {
    return ( 
        <article className="m-3 pl-6">
         <h1 className="text-20xl text-blue-600 number">{number}</h1>
           <h2 className="text-[#03cc46] font-bold text-2xl">
            {head}
           </h2>
           <p className="font-light py-3 text-sm text-neutral-700">
            {text}
           </p>
        </article>
     );
}
 
export default Reason;