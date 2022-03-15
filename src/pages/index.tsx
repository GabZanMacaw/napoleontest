import React, { useEffect, FormEvent, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";
import { Parallax } from "react-scroll-parallax";
import { NextSeo } from "next-seo";
import { isMobile } from "react-device-detect";
import toast, { Toaster } from "react-hot-toast";

import styles from "styles/Home.module.scss";
import styles_diff from "styles/Diff.module.scss";
import styles_catalogo from "styles/Catalogo.module.scss";

import Header from "components/Header";
import Button from "components/Button";
import Simple from "components/Simple";
import Title from "components/Title";
import CarouselSegment from "components/CarouselSegment";
import Footer from "components/Footer";

import LixasImg from "assets/img/lixas.png";
import DiffImg from "assets/img/diff.png";
import DiffMobileImg from "assets/img/diff_mobile.png";
import DuvidaImg from "assets/svg/duvida-icon.svg";
import MapaImg from "assets/svg/mapa-sobre.svg";
import FogueteImg from "assets/svg/diff/foguete.svg";
import RendimentoImg from "assets/svg/diff/rendimento.svg";
import CompetitivoImg from "assets/svg/diff/competitivo.svg";
import EntregaImg from "assets/svg/diff/entrega.svg";
import ProducaoImg from "assets/svg/diff/producao.svg";
import ItaliaImg from "assets/svg/diff/italia.svg";
import FlechasVermelhaImg from "assets/svg/diff/diff-arrows.svg";
import CatalogoImg from "assets/img/catalogo.png";

import {
  getSeoForPage,
  getBannersContent,
  getAboutContent,
  getDifferentialContent,
  getCatalogContent,
  getSegments,
  getSettingsContent,
} from "../lib/api";

export default function Home({
  seo,
  banners,
  about,
  differentials,
  catalog,
  segments,
  settings,
}: any) {
  const router = useRouter();
  const [newEmail, setNewEmail] = useState("");
  const [newCatalogDownload, setNewCatalogDownload] = useState(false);
  let deviceType = "desktop";
  if (isMobile) {
    deviceType = "mobile";
  }

  async function handleDownloadCatalog(event: FormEvent) {
    event.preventDefault();

    if (newEmail.trim() === "") {
      toast.error("Preencha o e-mail para continuar.");
      return;
    }

    if (catalog.media == undefined) {
      toast.error("Nenhum catálogo encontrado!");
      return;
    }

    fetch(`${catalog.media.url}`).then(
      (response) => {
        if (response.ok) {
          response.blob().then((blob) => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;
            a.download = catalog.media.name;
            a.click();
          });

          setNewEmail("");
          setNewCatalogDownload(true);
          toast.success("Catálogo baixado com sucesso!");
        } else {
          toast.error("Nenhum catálogo encontrado!");
          return;
        }
      }
    );
  }

  return (
    <>
      <NextSeo
        title={seo?.Seo?.metaTitle || " Napoleon Abrasives"}
        description={seo?.Seo?.metaDescription || "Napoleon, Abrasives"}
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

      <Toaster position="bottom-right" reverseOrder={false} />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <main className={styles.home}>
          <section className={styles.section}>
            <Simple deviceType={deviceType} banners={banners} />
            <div className={styles.historia}>
              <div className={styles.wrap}>
                <h3
                  className={`${styles.averta} aos-init aos-animate`}
                  data-aos="fade-right"
                >
                  {about?.subtitlethree || "65 ANOS DE"}
                </h3>
                <h3
                  className={`aos-init aos-animate`}
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  {about?.titlethree || "HISTÓRIA, TRADIÇÃO E SUCESSO!"}
                </h3>
                <Link href="/contato">
                  <a
                    className={`${styles.duvida_text} aos-init aos-animate`}
                    data-aos="fade-right"
                    data-aos-delay="300"
                  >
                    <Image
                      src={DuvidaImg}
                      width={DuvidaImg.width}
                      height={DuvidaImg.height}
                      alt="Dúvida"
                    />
                    <p className={styles.p2_averta}>Entre em contato</p>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <div className="background">
          <section className={styles.segmentos}>
            <div className={styles.image_lixas}>
              <Parallax y={[20, -40]} tagOuter="figure">
                <Image
                  src={LixasImg}
                  width={LixasImg.width}
                  height={LixasImg.height}
                  placeholder="blur"
                  alt="Foto Lixas"
                />
              </Parallax>
            </div>
          </section>

          <section>
            <Title
              subtitle="MADEIRA, METAL, AUTOMOTIVO E MUITO MAIS"
              title="SEGMENTOS ATENDIDOS"
            />
          </section>
          <section className="segmento aos-init aos-animate" data-aos="fade-up">
            <CarouselSegment segments={segments} />
          </section>

          <section>
            <div className={styles.sobre}>
              <div className={styles.sobre_img} data-aos="fade-up">
                <Image
                  src={MapaImg}
                  width={MapaImg.width}
                  height={MapaImg.height}
                  alt="Mapa ilustrativo"
                />
              </div>
              <div className={styles.text}>
                <Title subtitle="NOSSA HISTÓRIA" title="SOBRE A NAPOLEON" />
                <p
                  className={styles.p1}
                  style={{ whiteSpace: "pre-line" }}
                  data-aos="fade-right"
                >
                  {about?.textone}
                </p>
                <Link href="/sobre">
                  <a>
                    <Button>CONHEÇA A NAPOLEON</Button>
                  </a>
                </Link>
              </div>
            </div>
          </section>

          <section>
            <div className={styles_diff.diff}>
              <div className={styles_diff.diff_image_mob}>
                <Image
                  src={DiffMobileImg}
                  width={DiffMobileImg.width}
                  height={DiffMobileImg.height}
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
                        <Image
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
                  <Image
                    src={DiffImg}
                    width={DiffImg.width}
                    height={DiffImg.height}
                    alt="Nossos Diferenciais"
                  />
                </Parallax>
                <Parallax
                  className={styles_diff.red_arrows}
                  y={[-80, 30]}
                  tagOuter="figure"
                >
                  <Image
                    src={FlechasVermelhaImg}
                    width={FlechasVermelhaImg.width}
                    height={FlechasVermelhaImg.height}
                    alt="Flecha vermelha apontando para baixo"
                  />
                </Parallax>
              </div>
            </div>
          </section>
        </div>

        <div className={styles_catalogo.catalogo_fundo}>
          <section>
            <div className={styles_catalogo.content}>
              <Title
                subtitle="PRODUTOS"
                title="FAÇA DOWNLOAD DO NOSSO CATÁLOGO"
              />
              <form onSubmit={handleDownloadCatalog} data-aos="fade-right">
                <p className={styles_catalogo.p1}>
                  Digite seu e-mail abaixo e receba nosso catálogo completo.
                </p>

                <div className={styles_catalogo.input_div}>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                    onChange={(event) => setNewEmail(event.target.value)}
                    value={newEmail}
                  />
                  <label>Seu e-mail</label>
                </div>

                <Button isSecondary type="submit" disabled={newCatalogDownload}>
                  {newCatalogDownload ? "JÁ BAIXADO" : "BAIXAR CATÁLOGO"}
                </Button>
              </form>
            </div>
            <div className={styles_catalogo.catalogo_img} data-aos="fade-down">
              <Image
                src={CatalogoImg}
                width={CatalogoImg.width}
                height={CatalogoImg.height}
                placeholder="blur"
                alt="Baixe nosso catálogo"
              />
            </div>
          </section>
        </div>

        <Footer settings={settings} segments={segments} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const seo = (await getSeoForPage("/")) || [];
  const banners = (await getBannersContent()) || [];
  const about = (await getAboutContent()) || [];
  const differentials = (await getDifferentialContent()) || [];
  const catalog = (await getCatalogContent()) || [];
  const segments = (await getSegments()) || [];
  const settings = (await getSettingsContent()) || [];

  return {
    props: {
      seo,
      banners: banners?.banners || [],
      about: about?.about || [],
      differentials: differentials?.differentials || [],
      catalog: catalog?.catalog || [],
      segments: segments?.segments || [],
      settings: settings?.setting || [],
    },
    revalidate: 10, // In seconds
  };
}
