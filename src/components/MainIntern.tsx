import styles from "styles/MainIntern.module.scss";

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
          {icone && <img src={icone} width="100px" height="100px" alt={title} />}
          <h2>{title}</h2>
        </div>

        <img
          style={{objectFit: "none"}}
          src="/assets/svg/arrow-down.svg"
          className="arrow_down_main"
          alt="Role para baixo"
          data-aos="fade-up"
        />
      </section>
    </main>
  );
}
