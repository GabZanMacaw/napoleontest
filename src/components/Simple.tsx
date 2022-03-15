import Carousel from "react-multi-carousel";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css";

import Card from "components/Card";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type Props = {
  deviceType?: string;
  banners?: any[];
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType, banners = [] }: Props) => {
  if (banners.length == 0) {
    banners = [
      {
        buttonlink: "/sobre",
        buttontext: "Conheça a Napoleon",
        showbutton: true,
        subtitle: "TECNOLOGIA EUROPEIA",
        text: "",
        title: "DESEMPENHO PARA VOCÊ",
      },
    ];
  }
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      deviceType={deviceType}
    >
      {banners.map((card, i) => {
        return <Card {...card} key={i} />;
      })}
    </Carousel>
  );
};

export default Simple;
