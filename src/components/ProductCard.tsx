import Link from "next/link";
import Image from "next/image";

import Button from "components/Button";

import styles from "styles/Interna.module.scss";

type Props = {
  product?: any;
  segment?: string;
};

export default function ProductCard({ product, segment }: Props) {
  const imageUrl = `${
    product.image[0].url.startsWith("/")
      ? process.env.NEXT_PUBLIC_STRAPI_API_URL
      : ""
  }${product.image[0].url}`;

  let hoverImageUrl = imageUrl;
  if (product.image[1]) {
    hoverImageUrl = `${
      product.image[1].url.startsWith("/")
        ? process.env.NEXT_PUBLIC_STRAPI_API_URL
        : ""
    }${product.image[1].url}`
  }
  return (
    <div className={`${styles.item} aos-init aos-animate`} data-aos="fade-up" data-aos-delay="200">
      <Link
        href={{
          pathname: "/produtos/[segmento]/[slug]",
          query: { segmento: segment, slug: product.slug },
        }}
      >
        <a>
          <div className={styles.image}>
            <div className={styles.image_hover}>
              <Image
                src={hoverImageUrl}
                width="384px"
                height="355px"
                alt={product.title}
              />
            </div>
            <div className={styles.image_top}>
              <Image
                src={imageUrl}
                width="384px"
                height="355px"
                alt={product.title}
              />
            </div>
          </div>
          <p>{product.title}</p>
          <Button type="button">Saiba Mais</Button>
        </a>
      </Link>
    </div>
  );
}