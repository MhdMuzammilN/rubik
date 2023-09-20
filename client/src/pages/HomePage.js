import { Carousel } from "@material-tailwind/react";
import e1 from '../assets/e1.jpg'
import e2 from '../assets/e2.jpg'
import e3 from '../assets/e3.jpg'

const HomePage = () => {
  return (
    <div>
      <Carousel className="rounded-xl" transition={{ duration: 1 }}>
        <img
          src={e1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={e2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={e3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
     
    </div>
  );
};

export default HomePage;
