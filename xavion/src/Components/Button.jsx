/* eslint-disable react/prop-types */
const Button = ({text}) => {
    return ( 
        <button className="p-3 text-sm font-semibold bg-white">
         {text}
        </button>
     );
}
 
export default Button;