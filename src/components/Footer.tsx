import React, { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

export default function Footer({ settings, segments }: any) {
  const [mounted, setMounted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(!showResults);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer>
      <div className="footer">
        <div>
          <Link href="/">
            <a className="logo">
              <img
                style={{objectFit: "none"}}
                src="/assets/svg/logo-branco.svg"
                alt="Logo Napoleon"
              />
            </a>
          </Link>
        </div>
        <div className="infos">
          <a
            href={`mailto:${settings?.email || "#"}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="info">
              <div>
                <img
                  style={{objectFit: "none"}}
                  src="/assets/svg/email-icon.svg"
                  alt="Email Icone"
                />
              </div>
              {settings?.email || <Skeleton width={200} />}
            </div>
          </a>
          <div className="info">
            <div>
              <img
                style={{objectFit: "none"}}
                src="/assets/svg/phone-icon.svg"
                alt="Telefone Icone"
              />
            </div>
            <a
              href={`tel:${settings?.phone.replace(/\D/g, "") || "#"}`}
              target="_blank"
              rel="noreferrer"
            >
              {settings?.phone || <Skeleton width={50} />}
            </a>
            &nbsp;|&nbsp;
            <a
              href={`tel:${settings?.phonetwo.replace(/\D/g, "") || "#"}`}
              target="_blank"
              rel="noreferrer"
            >
              {settings?.phonetwo || <Skeleton width={50} />}
            </a>
          </div>
          <div className="info address">
            <div>
              <img
                style={{objectFit: "none"}}
                src="/assets/svg/marker-icon.svg"
                alt="Marcador Icone"
              />
            </div>
            <address>
              {settings?.address || <Skeleton width={200} />}
              <br />
              <Link href="/contato#google-maps">
                <a>Como Chegar</a>
              </Link>
            </address>
          </div>
        </div>
        <div className="nav-footer">
          <ul className="nav-list-footer">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <span className="fake-a" onClick={onClick}>
                Produtos
              </span>
              {showResults && (
                <ul className="nav-list-products">
                  {segments.map((segment: any, i: number) => {
                    return (
                      <li
                        onClick={() => {
                          setShowResults(false);
                        }}
                        key={i}
                      >
                        <Link href={`/produtos/${segment.slug}`}>
                          <a>{segment.name}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            <li>
              <Link href="/contato">
                <a>Contato</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-redes">
          <a
            href={`${settings?.facebook || "#"}`}
            target="_blank"
            rel="nofollow noreferrer"
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
            rel="nofollow noreferrer"
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
            rel="nofollow noreferrer"
          >
            <img
              style={{objectFit: "none"}}
              src="/assets/svg/linkedin-icon.svg"
              alt="Logo Linkedin"
            />
          </a>
        </div>
      </div>
      <div className="macaw">
        <a
          href="https://macawbrasil.com.br/"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <img
            style={{objectFit: "none"}}
            src="/assets/svg/macaw.svg"
            alt="Logo Macaw"
          />
        </a>
      </div>
      <div className="termos">
        <Link href="politicadeprivacidade">
          <a>Política de Privacidade</a>
        </Link>
        &nbsp;|&nbsp;
        <Link href="politicadecookies">
          <a>Política de Cookies</a>
        </Link>
        <br />
        <Link href="termodeuso">
          <a>Termo de Uso</a>
        </Link>
        &nbsp;|&nbsp;
        <Link href="politicadecordialidade">
          <a>Política de Cordialidade</a>
        </Link>
        <br />
        <Link href="politicadetecnologiaepublicidade">
          <a>Política das Tecnologias e Publicidade</a>
        </Link>
      </div>
    </footer>
  );
}
