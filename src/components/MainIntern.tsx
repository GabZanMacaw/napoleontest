import Image from "next/image";

import styles from "styles/MainIntern.module.scss";

import FlechaImg from "assets/svg/arrow-down.svg";

type Props = {
  title?: string;
  fundo?: string;
  icone?: string;
};

export default function MainIntern({
  title = "",
  fundo = "",
  icone = "",
}: Props) {
  if (fundo == "sobre") {
    fundo = styles.sobre;
  }
  if (fundo == "contato") {
    fundo = styles.contato;
  }
  if (fundo == "interna") {
    fundo = styles.interna;
  }
  return (
    <main className={`${styles.main} ${fundo}`}>
      <section className={styles.section}>
        <div className={styles.image_div} data-aos="fade-right">
          {icone && <Image src={icone} width="100%" height="100%" alt={title} />}
          <h2>{title}</h2>
        </div>

        <Image
          src={FlechaImg}
          width={FlechaImg.width}
          height={FlechaImg.height}
          className="arrow_down_main"
          alt="Role para baixo"
          data-aos="fade-up"
        />
      </section>
    </main>
  );
}
