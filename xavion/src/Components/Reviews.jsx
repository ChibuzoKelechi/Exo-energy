/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
    return ( 
        <section className="reviews p-3">
            <div>
                <h2 className="text-sm uppercase py-2 text-[#120ef7]">reviews</h2>
                <h1 className="font-semibold text-xl">What Investors say about us</h1>
            </div>

            <div className="flex flex-col justify-center text-center py-20">
             <ReviewBoard
              review='Thank you Xavion Energy for giving me a life changing opportunity through energy investments. My life changed financially '
              customer='Cole Lennon'
             />
            </div>

        </section>
     );
}
 
export default Reviews;

function ReviewBoard({review, customer}) {
    return (
        <article className="mt-18 w-4/5 shadow-xl mx-auto rounded-xl">
            <div>
                <FaQuoteLeft style={{ color:"#120ef7", fontSize:'30px', margin:'1rem auto'}}/>
            </div>

            <div>
                <p className="review text-neutral-600 text-sm">
                   "{review}"
                </p>
                <h2 className="customername text-md py-5">{customer}</h2>
            </div>

        </article>
      );
}