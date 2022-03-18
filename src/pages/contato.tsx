import React, { useState } from "react";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { NextSeo, CorporateContactJsonLd } from "next-seo";

import styles from "styles/Contato.module.scss";

import Header from "components/Header";
import Button from "components/Button";
import Title from "components/Title";
import Footer from "components/Footer";
import MainIntern from "components/MainIntern";

import { getSeoForPage, getSettingsContent, getSegments } from "../lib/api";
import Link from "next/link";

export default function Contato({ seo, settings, segments }: any) {
  const router = useRouter();
  const [state, setState] = useState({
    nome: "",
    email: "",
    celular: "",
    assunto: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const registerContact = (event: any) => {
    event.preventDefault(); // don't redirect the page

    setLoading(true);

    const mailOption = {
      to: process.env.EMAIL_TO_PUBLIC,
      subject: `Novo contato do site Napoleon`,
      html: `
        <b>Primeiro nome: </b> ${state.nome} <br>
        <b>E-mail corporativo: </b> ${state.email} <br>
        <b>Telefone geral ou corporativo: </b> ${state.celular} <br>
        <b>Assunto: </b> ${state.assunto} <br>
        <b>Mensagem: </b> ${state.mensagem}
      `,
    };

    fetch(process.env.NEXT_PUBLIC_STRAPI_API_URL + "/email", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailOption),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
        setLoading(true);
      } else {
        setLoading(true);
      }
    });
  };

  return (
    <>
      <NextSeo
        title={seo?.Seo?.metaTitle || "Contato - Napoleon Abrasives"}
        description={
          seo?.Seo?.metaDescription || "Contato, Napoleon, Abrasives"
        }
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
      <CorporateContactJsonLd
        url={router.pathname}
        logo={`${router.basePath}logo.png`}
        contactPoint={[
          {
            telephone: settings?.phone,
            contactType: "customer service",
            areaServed: "BR",
            availableLanguage: "Portuguese",
          },
          {
            telephone: settings?.phonetwo,
            contactType: "customer service",
            areaServed: "BR",
            availableLanguage: "Portuguese",
          },
        ]}
      />

      <Header settings={settings} segments={segments} />

      <div className={styles.container}>
        <MainIntern title={"Vamos Conversar"} fundo="contato" />

        <section>
          <div className={styles.content}>
            <div className={styles.info} data-aos="fade-right">
              <img
                style={{objectFit: "none"}}
                src="/assets/svg/contato/chat-icon.svg"
                alt="Chat Icone"
              />
              <div className={styles.title_div}>
                <Title title="CONTATO" isLeftAlign />
                <p className={styles.p1}>
                  Entre em contato com a Napoleon preenchendo o formulário ao
                  lado. Em breve responderemos.
                </p>
              </div>
              <div
                className={styles.box_contact}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <img
                  style={{objectFit: "none"}}
                  src="/assets/svg/contato/phone-icon.svg"
                  alt="Telefone Icone"
                />
                <div>
                  <p className={styles.p2}>Telefone</p>
                  <p className={styles.p2averta}>
                    <a
                      href={`tel:${settings?.phone?.replace(/\D/g, "") || "#"}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {settings?.phone || <Skeleton width={50} />}
                    </a>{" "}
                    |{" "}
                    <a
                      href={`tel:${
                        settings?.phonetwo?.replace(/\D/g, "") || "#"
                      }`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {settings?.phonetwo || <Skeleton width={50} />}
                    </a>
                  </p>
                </div>
              </div>
              <div
                className={styles.box_contact}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <img
                  style={{objectFit: "none"}}
                  src="/assets/svg/contato/email-icon.svg"
                  alt="Email Icone"
                />
                <div>
                  <p className={styles.p2}>E-mail</p>
                  <p className={styles.p2averta}>
                    <a
                      href={`mailto:${settings?.email || "#"}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {settings?.email || <Skeleton width={200} />}
                    </a>
                  </p>
                </div>
              </div>
              <div
                className={styles.divider}
                data-aos="fade-right"
                data-aos-delay="400"
              ></div>
              <div className={`menu-redes ${styles.redes}`}>
                <a
                  href={`${settings?.facebook || "#"}`}
                  target="_blank"
                  rel="noreferrer nofollow"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <img
                    style={{objectFit: "none"}}
                    src="/assets/svg/facebook-icon.svg"
                    alt="Logo Facebook"
                  />
                </a>
                <a
                  href={`${settings?.instagram || "#"}`}
                  target="_blank"
                  rel="noreferrer nofollow"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <img
                    style={{objectFit: "none"}}
                    src="/assets/svg/instagram-icon.svg"
                    alt="Logo Instagram"
                  />
                </a>
                <a
                  href={`${settings?.linkedin || "#"}`}
                  target="_blank"
                  rel="noreferrer nofollow"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <img
                    style={{objectFit: "none"}}
                    src="/assets/svg/linkedin-icon.svg"
                    alt="Logo Linkedin"
                  />
                </a>
              </div>
            </div>
            <div className={styles.form}>
              {!submitted && (
                <form data-aos="fade-up" onSubmit={registerContact}>
                  <div className={styles.input_div}>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Primeiro nome"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    />
                    <label>Seu primeiro nome</label>
                  </div>
                  <div className={styles.input_div}>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    />
                    <label>E-mail corporativo</label>
                  </div>
                  <div className={styles.input_div}>
                    <input
                      type="tel"
                      name="celular"
                      placeholder="Telefone"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    />
                    <label>Telefone geral ou corporativo</label>
                  </div>
                  <div className={styles.input_div}>
                    <input
                      type="text"
                      name="assunto"
                      placeholder="Assunto"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    />
                    <label>Assunto do e-mail</label>
                  </div>
                  <div className={styles.input_div}>
                    <textarea
                      name="mensagem"
                      placeholder="Mensagem"
                      rows={4}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    />
                    <label>Mensagem do e-mail</label>
                  </div>

                  <p className={styles.p3}>
                    Aviso!<br />
                    Para seu conhecimento e segurança: as informações acima são de natureza corporativa, desprovidas de dados pessoais. A exceção é o “Primeiro nome”, o qual segue o parâmetro de anonimização. Eventuais dados pessoais lançados serão utilizados exclusivamente para procedimentos preliminares próprios das relações negociais B2B ou <span style={{color: "red"}}>B2G</span>, nos termos da LGPD 7º, V, razão pela qual coletamos sua concordância abaixo. No entanto, antes de consentir, pedimos que acesse e leia nossos termos e políticas, condição para permanecer navegando.
                  </p>

                  <div className={styles.aceito_div}>
                    <input type="checkbox" name="aceito" id="aceito" required />
                    <p className={styles.p4}>Li e aceito o aviso acima, bem como os <Link href="/docslegais">termos</Link> do website da Napoleon.</p>
                  </div>

                  <Button type="submit">
                    {loading && <>Enviando...</>}
                    {!loading && <>Enviar</>}
                  </Button>
                </form>
              )}
              {submitted && (
                <>
                  <h3>Obrigado por entrar em contato conosco.</h3>
                  <p>Entraremos em contato logo mais.</p>
                </>
              )}
            </div>
          </div>
        </section>

        <iframe
          title="Localização"
          id="google-maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.2041822770934!2d-51.195615284270076!3d-29.158654797603155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea2dbb845f977%3A0x5e0cbde0f2d8c35f!2sNapoleon%20Abrasivos%20DBT%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1625685481194!5m2!1spt-BR!2sbr"
          width="100%"
          height="702"
          frameBorder="0"
          style={{ border: 0, marginTop: "5rem", marginBottom: "-20px" }}
          allowFullScreen={false}
          aria-hidden="false"
          tabIndex={1}
          loading="lazy"
        />

        <Footer settings={settings} segments={segments} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const seo = (await getSeoForPage("/contato")) || [];
  const settings = (await getSettingsContent()) || [];
  const segments = (await getSegments()) || [];

  return {
    props: {
      seo,
      settings: settings?.setting || [],
      segments: segments?.segments || [],
    },
    revalidate: 10, // In seconds
  };
}
