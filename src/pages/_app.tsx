import "styles/globals.scss";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css"
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: window.innerWidth < 961,
    });
    AOS.refresh();
  }, []);

  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
export default MyApp;
