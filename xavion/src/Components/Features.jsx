import Reason from "./Reason";

const Features = () => {
    return ( 
        <section>
         <article className="p-4 pl-10">
            <h5 className="text-xs tracking-wide my-2 uppercase">company features</h5>
            <h2 className="py-3 text-2xl font-bold">Why Xavion Energy</h2>
             <p className="text-sm text-neutral-600 tracking-wide">
               It is no secret that the global demand for oil, gas and solar is continuously on the rise, while the actual supplies are on the decline. Over 50 million barrels of oil per day are used by the top ten oil consuming countries in the world, which as you can see translates into excellent investment opportunities for investors.​It is projected that by 2035, the world energy consumption will grow by 49%. The majority, over half, of energy will be supplied by oil, gas & solar. Knowing this, we look at the long-term economic value, cash flow, and tax benefits and conclude that the oil, gas and solar business is a great investment opportunity for any sophisticated investor... Consider the following: </p>
        </article>
        
        <Reason
          number='01'
          head='Passive Income'
          text='You earn money daily when your projects begin generating income. When oil and gas begins flowing from your successful energy investments, or when your solar project start generating electricity for sale, you earn periodic payouts deposited directly into your bank account.'
        />

        <Reason
          number='02'
          head='Insurance'
          text='Xavion Energy maintains insurance of all assets and investor deposits. All are covered by FDIC Insurance. Withdrawal of your earned dividends is also guaranteed. Investors are allowed to withdraw their dividends anytime. Also, you get a full refund of your capital when you cancel your investment(s) with us.'
        />
        
        <Reason
        number='03'
        head='Approved by Experts'
        text='We Bring What We Believe To Be The Best… We offer the first-of-its-kind platform to deliver direct access cash flow returns from oil, gas & solar projects. Each project passes through a three-stage vetting process, screened by our expert team of geologists and solar engineers. Our team of seasoned energy professionals bring you the best private deals targeting above-market returns, without risk.'
      />

        </section>
     );
}
 
export default Features;