import Link from "next/link";

import styles from "styles/Card.module.scss";

import Button from "components/Button";

export default function Card({ ...props }: any) {
  return (
    <div className={styles.carousel_home}>
      <h3 data-aos="fade-right">{props?.subtitle}</h3>
      <h2 className={styles.averta} data-aos="fade-left">{props?.title}</h2>
      <p className={styles.p1} data-aos="fade-left">{props?.text}</p>
      {props?.showbutton && (
        <Link href={props?.buttonlink || "#"}>
          <a data-aos="fade-up">
            <Button type="button">{props?.buttontext}</Button>
          </a>
        </Link>
      )}
    </div>
  );
}
