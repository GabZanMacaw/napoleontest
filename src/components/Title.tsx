import styles from "styles/Title.module.scss";

type Props = {
  subtitle?: string;
  title?: string;
  isBlack?: boolean;
  isWhite?: boolean;
  isLeftAlign?: boolean;
};

export default function Title({
  subtitle = "",
  title = "",
  isBlack = false,
  isWhite = false,
  isLeftAlign = false,
}: Props) {
  return (
    <>
      <p className={styles.subtitle} data-aos="fade-right">{subtitle}</p>
      <h2
        className={`${
          isBlack ? styles.black : isWhite ? styles.white : styles.title
        } ${isLeftAlign ? styles.left : ""}`}
        data-aos="fade-right"
        data-aos-delay="200"
      >
        {title}
      </h2>
    </>
  );
}
