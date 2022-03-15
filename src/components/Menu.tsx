import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import LogoBrancoImg from "assets/svg/logo-branco.svg";

type Props = {
  close?: any;
  segments?: any;
};

export default function Menu({ close, segments }: Props) {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(!showResults);

  return (
    <div className="menu">
      <Link href="/">
        <a className="logo">
          <Image
            src={LogoBrancoImg}
            width={LogoBrancoImg.width}
            height={LogoBrancoImg.height}
            alt="Logo Napoleon"
          />
        </a>
      </Link>
      <ul>
        <li onClick={() => { close; setShowResults;}}>
          <Link href="/">
            <a>Início</a>
          </Link>
        </li>
        <li onClick={() => { close; setShowResults;}}>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <span className="fake-a" onClick={onClick}>
            Produtos
          </span>
          {showResults && (
            <ul className="produtos-ul">
              {segments.map((segment:any, i:number) => {
                return (
                  <li onClick={() => { close(true); setShowResults(false);}} key={i}>
                    <Link href={`/produtos/${segment.slug}`}>
                      <a>{segment.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
        <li onClick={() => { close; setShowResults;}}>
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}