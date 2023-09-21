import { Carousel } from "@material-tailwind/react";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import e3 from "../assets/e3.jpg";

const CarousalElectronic = () => {
    return ( 
        <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <Carousel className="rounded-xl" transition={{ duration: 1 }}>
        <img
          src={e1}
          alt = ""
          className="h-full w-full object-cover"
        />
        <img
          src={e2}
          alt = ""
          className="h-full w-full object-cover"
        />
        <img
          src={e3}
          alt = ""
          className="h-full w-full object-cover"
        />
      </Carousel>
        </div>
        
     );
}
 
export default CarousalElectronic;