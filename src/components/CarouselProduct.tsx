import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import ProductCard from "components/ProductCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 541, min: 0 },
    items: 1,
  },
};


type Props = {
  deviceType?: string;
  items?: any[];
  segment?: string;
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const CarouselProduct = ({ deviceType, items = [], segment }: Props) => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      deviceType={deviceType}
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      containerClass="carousel-item-produtos"
      itemClass="carousel-item-padding-40-px"
    >
      {items.map((product, i) => {
        return <ProductCard product={product} segment={segment} key={i} />;
      })}
    </Carousel>
  );
};

export default CarouselProduct;