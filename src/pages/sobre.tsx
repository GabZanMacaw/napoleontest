import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import { NextSeo } from "next-seo";
import { useRouter, withRouter } from "next/router";

import styles from "styles/Sobre.module.scss";
import styles_diff from "styles/Diff.module.scss";

import Header from "components/Header";
import Button from "components/Button";
import Title from "components/Title";
import Footer from "components/Footer";
import MainIntern from "components/MainIntern";

import {
  getSeoForPage,
  getAboutContent,
  getDifferentialContent,
  getSettingsContent,
  getSegments,
} from "../lib/api";

export default function Sobre({
  seo,
  about,
  differentials,
  settings,
  segments,
}: any) {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={seo?.Seo?.metaTitle || "Sobre - Napoleon Abrasives"}
        description={seo?.Seo?.metaDescription || "Sobre, Napoleon, Abrasives"}
        canonical={router.pathname}
        additionalMetaTags={[
          {
            property: "keywords",
            content: seo?.Seo?.keywords || "",
          },
        ]}
        openGraph={{
          url: router.pathname,
          title: seo?.Seo?.metaTitle || "Napoleon Abrasives",
          description: seo?.shareImage?.alt || seo?.Seo?.metaDescription,
          images: [
            {
              url: seo?.Seo?.shareImage?.media?.url || "/share.jpg",
              width: 1210,
              height: 544,
              alt: seo?.Seo?.shareImage?.alt || "",
            },
          ],
          site_name: "Napoleon Abrasives",
        }}
        twitter={{
          handle: "@napoleonabrasives",
          site: "@site",
          cardType: "summary_large_image",
        }}
        noindex={seo?.Seo?.preventIndexing || false}
        nofollow={seo?.Seo?.preventIndexing || false}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern title={"CONHEÇA A NAPOLEON"} fundo="sobre" />

        <div className={styles.mapa_img}>
          <section>
            <div className={styles.somos}>
              <div className={styles.textodir}>
                <Title
                  subtitle={about?.subtitleone || "QUEM SOMOS"}
                  title={
                    about?.titleone ||
                    "TECNOLOGIA EUROPEIA, PRODUÇÃO BRASILEIRA"
                  }
                />
                <p
                  className={`${styles.p1} ${styles.paragraph1}`}
                  data-aos="fade-up"
                >
                  {about?.textone}
                </p>
              </div>

              <div className={styles.textoesq}>
                <Title
                  title={about?.titletwo || "QUALIDADE E TECNOLOGIA"}
                  isBlack
                />
                <p
                  className={`${styles.p1} ${styles.paragraph2}`}
                  data-aos="fade-up"
                >
                  {about?.texttwo}
                </p>
              </div>
            </div>
          </section>
          <div>
            <div className={styles.historiasomos}>
              <section
                className={`${styles.wrap} aos-init aos-animate`}
                data-aos="fade-right"
              >
                <Title
                  isWhite
                  subtitle={about?.subtitlethree || "65 ANOS DE"}
                  title={about?.titlethree || "HISTÓRIA, TRADIÇÃO E SUCESSO"}
                />
              </section>
            </div>

            <div className={styles.valores}>
              <div className={styles.container_retangulo}>
                <div className={styles.retangulo} data-aos="flip-left">
                  <p className={styles.p2averta}>MISSÃO</p>
                  <p className={styles.p2}>{about?.mission}</p>
                </div>
                <div className={styles.retangulo} data-aos="flip-left">
                  <p className={styles.p2averta}>VISÃO</p>
                  <p className={styles.p2}>{about?.vision}</p>
                </div>
              </div>

              <div className={styles.wrap}>
                <h3 data-aos="fade-right">Valores</h3>
                <p
                  className={styles.valores_text}
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  {about?.quality}
                </p>
              </div>
            </div>
          </div>
          <section>
            <div className={`${styles_diff.diff} ${styles.diff}`}>
              <div className={styles_diff.diff_image_mob}>
                <img
                  style={{objectFit: "none"}}
                  src="/assets/img/diff.png"
                  alt="Nossos Diferenciais"
                />
              </div>
              <div className={styles_diff.list_products}>
                {differentials.map((diff: any, i: number) => {
                  const imageUrl = `${
                    diff.media.url.startsWith("/")
                      ? process.env.NEXT_PUBLIC_STRAPI_API_URL
                      : ""
                  }${diff.media.url}`;
                  return (
                    <div
                      className={`${styles_diff.box_diff} aos-init aos-animate`}
                      data-aos="fade-left"
                      key={i}
                    >
                      <div className={styles_diff.image}>
                        <img
                          src={imageUrl}
                          width="100%"
                          height="100%"
                          alt={diff.title}
                        />
                      </div>
                      <div className={styles_diff.content}>
                        <p className={styles_diff.p2averta}>{diff.title}</p>
                        <p className={styles_diff.p3}>{diff.text}</p>
                      </div>
                    </div>
                  );
                })}

                <Link href="/contato">
                  <a>
                    <Button isSecondary>Entre em Contato</Button>
                  </a>
                </Link>
              </div>
              <div className={styles_diff.diff_image}>
                <Parallax y={[40, -20]} tagOuter="figure">
                  <img
                    style={{objectFit: "none"}}
                    src="/assets/img/diff.png"
                    alt="Nossos Diferenciais"
                  />
                </Parallax>
                <Parallax
                  className={styles_diff.red_arrows}
                  y={[-80, 30]}
                  tagOuter="figure"
                >
                  <img
                    style={{objectFit: "none"}}
                    src="/assets/svg/diff/diff-arrows.svg"
                    alt="Flecha vermelha apontando para baixo"
                  />
                </Parallax>
              </div>
            </div>
          </section>
        </div>

        <Footer settings={settings} segments={segments} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const seo = (await getSeoForPage("/sobre")) || [];
  const about = (await getAboutContent()) || [];
  const differentials = (await getDifferentialContent()) || [];
  const segments = (await getSegments()) || [];
  const settings = (await getSettingsContent()) || [];

  return {
    props: {
      seo,
      about: about?.about || [],
      differentials: differentials?.differentials || [],
      segments: segments?.segments || [],
      settings: settings?.setting || [],
    },
    revalidate: 10, // In seconds
  };
}
