import { useState } from "react";
import { useRouter, withRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { isMobile } from "react-device-detect";

import styles from "styles/Interna.module.scss";

import LogoBrancoImg from "assets/svg/logo-branco.svg";

import Header from "components/Header";
import Button from "components/Button";
import Footer from "components/Footer";
import MainIntern from "components/MainIntern";
import Title from "components/Title";
import CarouselSegment from "components/CarouselSegment";
import ProductCard from "components/ProductCard";

import {
	getAllSegmentsWithSlug,
	getSegment,
	getSettingsContent,
} from "../../lib/api";

export default function Segmentos({ segment, moreSegments, settings }: any) {
	const router = useRouter();

	let deviceType = "desktop";
	if (isMobile) {
		deviceType = "mobile";
	}

	if (router.isFallback) {
		return (
			<div className="loading">
				<Image
					src={LogoBrancoImg}
					width={LogoBrancoImg.width}
					height={LogoBrancoImg.height}
					alt="Logo Napoleon"
				/>
			</div>
		);
	}

	const iconImg = `${
		segment.icon.url.startsWith("/")
			? process.env.NEXT_PUBLIC_STRAPI_API_URL
			: ""
	}${segment.icon.url}`;

	return (
		<>
			<NextSeo
				title={
					segment.seo?.Seo?.metaTitle ||
					`${segment.name} - Napoleon Abrasives`
				}
				description={
					segment.seo?.Seo?.metaDescription ||
					`${segment.name}, Napoleon, Abrasives`
				}
				canonical={router.pathname}
				additionalMetaTags={[
					{
						property: "keywords",
						content: segment.seo?.Seo?.keywords || "",
					},
				]}
				openGraph={{
					url: router.pathname,
					title: segment.seo?.Seo?.metaTitle || "Napoleon Abrasives",
					description:
						segment.seo?.shareImage?.alt ||
						segment.seo?.Seo?.metaDescription,
					images: [
						{
							url:
								segment.seo?.Seo?.shareImage?.media?.url ||
								"/share.jpg",
							width: 1210,
							height: 544,
							alt: segment.seo?.Seo?.shareImage?.alt || "",
						},
					],
					site_name: "Napoleon Abrasives",
				}}
				twitter={{
					handle: "@napoleonabrasives",
					site: "@site",
					cardType: "summary_large_image",
				}}
				noindex={segment.seo?.Seo?.preventIndexing || false}
				nofollow={segment.seo?.Seo?.preventIndexing || false}
			/>

			<Header settings={settings} segments={moreSegments} />

			<div className={styles.container}>
				<MainIntern
					title={segment.name}
					fundo="interna"
					icone={iconImg}
				/>

				<section>
					<div className={styles.content}>
						<div className={styles.breadcrumb}>
							<span>
								<Link href="/">
									<a>HOME</a>
								</Link>{" "}
								&gt; PRODUTOS &gt;{" "}
								<strong>{segment.name}</strong>
							</span>
						</div>
						<div className={styles.grid}>
							{segment?.products.map(
								(product: any, i: number) => {
									return (
										<ProductCard
											product={product}
											segment={segment.slug}
											key={i}
										/>
									);
								}
							)}
						</div>
					</div>
				</section>

				{moreSegments.length > 0 && (
					<>
						<section>
							<Title
								subtitle="CONFIRA OUTROS"
								title="SEGMENTOS ATENDIDOS"
							/>
						</section>
						<section
							className="segmento aos-init aos-animate"
							data-aos="fade-up"
						>
							<CarouselSegment segments={moreSegments} />
						</section>
					</>
				)}

				<Footer settings={settings} segments={moreSegments} />
			</div>
		</>
	);
}

export async function getStaticProps({ params }: any) {
	const data = await getSegment(params.segmento);
	const settings = (await getSettingsContent()) || [];

	return {
		props: {
			segment: data?.segments[0],
			moreSegments: data?.moreSegments,
			settings: settings?.setting || [],
		},
		revalidate: 10, // In seconds
	};
}

export async function getStaticPaths() {
	const segments = await getAllSegmentsWithSlug();

	return {
		paths: segments?.segments.map((_segment: any) => {
			return {
				params: { segmento: _segment.slug },
			};
		}),
		fallback: true,
	};
}
