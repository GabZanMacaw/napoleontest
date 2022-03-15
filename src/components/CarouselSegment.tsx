import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation
} from 'swiper/core';

import styles from "styles/CarouselSegmento.module.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

type Props = {
  segments?: any[];
};

export default function CarouselSegment({ segments = [] }:Props) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <Swiper
      className={styles.carousel_segmento}
      spaceBetween={32}
      slidesPerView={"auto"}
      centeredSlides={true}
      pagination={true}
      navigation={{
        prevEl: prevRef.current ? prevRef.current : undefined,
        nextEl: nextRef.current ? nextRef.current : undefined,
      }}
      onInit={(swiper:any) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.update();
      }}
    >
      {segments.map((segment, i) => {
        const backgroundUrl = `${
          segment.background.url.startsWith("/")
            ? process.env.NEXT_PUBLIC_STRAPI_API_URL
            : ""
        }${segment.background.url}`;

        const iconUrl = `${
          segment.icon.url.startsWith("/")
            ? process.env.NEXT_PUBLIC_STRAPI_API_URL
            : ""
        }${segment.icon.url}`;

        return (
          <SwiperSlide className={styles.swiper_slide} key={i}>
            {({ isActive }) => (
              <div className={`${isActive ? styles.active : ""}`}>
                <Link href={`/produtos/${segment.slug}`}>
                  <div className={styles.box_segmento}>
                    <Image src={backgroundUrl} width="384px" height="496px" alt={segment.name} />
                    <div className={styles.after}>
                      <div className={styles.text}>
                        <div className={styles.box_svg}>
                          <Image
                            src={iconUrl}
                            alt={segment.name}
                            layout="fill"
                          />
                        </div>
                        <p className={styles.p1averta}>{segment.name}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </SwiperSlide>
        );
      })}

      <div className="swipper_buttons">
        <div className="swiper-button-prev" ref={prevRef}></div>
        <div className="swiper-button-next" ref={nextRef}></div>
      </div>
    </Swiper>
  );
}
