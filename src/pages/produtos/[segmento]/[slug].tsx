import Link from "next/link";
import { useRouter } from "next/router";
import ImageGallery from "react-image-gallery";
import { NextSeo } from "next-seo";
import { isMobile } from "react-device-detect";
import ReactMarkdown from "react-markdown";

import styles from "styles/Interna.module.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import MainIntern from "components/MainIntern";
import Title from "components/Title";
import CarouselProduct from "components/CarouselProduct";

import {
  getAllProductsWithSlug,
  getProduct,
  getSettingsContent,
  getSegments,
} from "../../../lib/api";

export default function Produtos({
  product,
  moreProducts,
  settings,
  segments,
}: any) {
  const router = useRouter();

  let deviceType = "desktop";
  if (isMobile) {
    deviceType = "mobile";
  }

  if (router.isFallback) {
    return (
      <div className="loading">
        <img
          style={{objectFit: "none"}}
          src="/assets/svg/logo-branco.svg"
          alt="Logo Napoleon"
        />
      </div>
    );
  }

  const segmentImg = `${
    product.segment.icon.url.startsWith("/")
      ? process.env.NEXT_PUBLIC_STRAPI_API_URL
      : ""
  }${product.segment.icon.url}`;

  const images = product.image.map(function (data: any, idx: number) {
    const url = `${
      data.url.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
    }${data.url}`;
    return {
      original: url,
      thumbnail: url,
    };
  });

  return (
    <>
      <NextSeo
        title={
          product.seo?.Seo?.metaTitle || `${product.title} - Napoleon Abrasives`
        }
        description={
          product.seo?.Seo?.metaDescription ||
          `${product.title}, Napoleon, Abrasives`
        }
        canonical={router.pathname}
        additionalMetaTags={[
          {
            property: "keywords",
            content: product.seo?.Seo?.keywords || "",
          },
        ]}
        openGraph={{
          url: router.pathname,
          title: product.seo?.Seo?.metaTitle || "Napoleon Abrasives",
          description:
            product.seo?.shareImage?.alt || product.seo?.Seo?.metaDescription,
          images: [
            {
              url: product.seo?.Seo?.shareImage?.media?.url || "/share.jpg",
              width: 1210,
              height: 544,
              alt: product.seo?.Seo?.shareImage?.alt || "",
            },
          ],
          site_name: "Napoleon Abrasives",
        }}
        twitter={{
          handle: "@napoleonabrasives",
          site: "@site",
          cardType: "summary_large_image",
        }}
        noindex={product.seo?.Seo?.preventIndexing || false}
        nofollow={product.seo?.Seo?.preventIndexing || false}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern
          title={product.segment.name}
          fundo="interna"
          icone={segmentImg}
        />

        <section>
          <div className={styles.content}>
            <div className={styles.breadcrumb} data-aos="fade-right">
              <span>
                <Link href="/">
                  <a>HOME</a>
                </Link>{" "}
                &gt; PRODUTOS &gt;{" "}
                <Link href={`/produtos/${product.segment.slug}`}>
                  <a>{product.segment.name}</a>
                </Link>{" "}
                &gt; <strong>{product.title}</strong>
              </span>
            </div>
            <div className={styles.product}>
              <div className={styles.gallery} data-aos="fade-up">
                <ImageGallery items={images} />
              </div>
              <div className={styles.product_desc} data-aos="fade-left">
                <h1>{product.title}</h1>
                <div className={styles.segment}>
                  <div className={styles.image}>
                    <img
                      src={segmentImg}
                      width="100%"
                      height="100%"
                      alt={product.segment.name}
                    />
                  </div>
                  <p>{product.segment.name}</p>
                </div>
                <div className={styles.description}>
                  <ReactMarkdown>{product.extra}</ReactMarkdown>
                  {/* <p className={styles.bold}>Descrição</p>
                  <p className={styles.text}>{product.description}</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Title title="PRODUTOS RELACIONADOS" />
        </section>
        <section>
          <CarouselProduct
            deviceType={deviceType}
            items={moreProducts}
            segment={product.segment.slug}
          />
        </section>

        <Footer settings={settings} segments={segments} />
      </div>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  const data = await getProduct(params.slug, params.segmento);
  const settings = (await getSettingsContent()) || [];
  const segments = (await getSegments()) || [];

  return {
    props: {
      product: data?.products[0],
      moreProducts: data?.moreProducts,
      settings: settings?.setting || [],
      segments: segments?.segments || [],
    },
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const products = await getAllProductsWithSlug();

  return {
    paths: products?.products.map((_product: any) => {
      return {
        params: { segmento: _product.segment.slug, slug: _product.slug },
      };
    }),
    fallback: false,
  };
}
