import Link from "next/link";
import { NextSeo } from "next-seo";

import styles from "styles/Termos.module.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import MainIntern from "components/MainIntern";

import { getSettingsContent, getSegments } from "../lib/api";

export default function TermoDeUso({ settings, segments }: any) {
  return (
    <>
      <NextSeo
        title={"Documentos Legais - Napoleon Abrasives"}
        description={"Documentos Legais, Napoleon, Abrasives"}
        noindex={true}
        nofollow={true}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern title={"Documentos Legais"} fundo="sobre" />

        <div className={styles.termos} style={{paddingBottom: "3rem"}}>
          <p style={{textAlign: "center"}}><Link href="/politicadeprivacidade">Política de Privacidade</Link></p>
          <p style={{textAlign: "center"}}><Link href="/politicadecookies">Política de Cookies</Link></p>
          <p style={{textAlign: "center"}}><Link href="/termodeuso">Termo de Uso</Link></p>
          <p style={{textAlign: "center"}}><Link href="/politicadecordialidade">Política de Cordialidade</Link></p>
          <p style={{textAlign: "center"}}><Link href="/politicadetecnologiaepublicidade">Política de Tecnologias e Publicidade</Link></p>
        </div>

        <Footer settings={settings} segments={segments} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const segments = (await getSegments()) || [];
  const settings = (await getSettingsContent()) || [];

  return {
    props: {
      segments: segments?.segments || [],
      settings: settings?.setting || [],
    },
    revalidate: 10, // In seconds
  };
}
