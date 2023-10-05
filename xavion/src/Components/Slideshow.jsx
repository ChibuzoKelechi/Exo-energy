import { useEffect, useState } from "react";
// import images from "../DataFiles/data.js";

const Slideshow = () => {
    const images = [
        '../assets/1.jpg',
        '../assets/2.jpg',
        '../assets/3.jpg',
        '../assets/4.jpg'
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
      }, []);

    return ( 
        <div className="slideshow-container">
            <img src={images[currentImageIndex]} alt="Slideshow" />
            {/* <button onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>Prev</button> */}
            {/* <button onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)}>Next</button> */}
        </div>
     );
}
 
export default Slideshow;