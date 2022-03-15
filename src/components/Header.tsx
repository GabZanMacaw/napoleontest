import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";

import styles from "styles/Header.module.scss";
import LogoImg from "assets/svg/logo.svg";
import FacebookLogo from "assets/svg/facebook-icon-blue.svg";
import InstagramLogo from "assets/svg/instagram-icon-blue.svg";
import LinkedinLogo from "assets/svg/linkedin-icon-blue.svg";
import dropdownIcon from "assets/svg/dropdown-icon.svg";

import Popup from "reactjs-popup";
import BurgerIcon from "../components/BurgerIcon";
import Menu from "../components/Menu";

export default function Header({ settings, segments }: any) {
	const [mounted, setMounted] = useState(false);
	const [isSticky, setSticky] = useState(false);
	const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(2);
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 100) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	const handleLeaveDropdown = () => {
		setIsOpen(false);
	};

	// When mounted on client, now we can show the UI
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<header className={styles.header}>
				<div
					className={`${styles.header__div} ${
						isSticky ? styles.sticky : ""
					}`}
				>
					<Link href="/">
						<a className={styles.logo}>
							<Image
								src={LogoImg}
								width={LogoImg.width}
								height={LogoImg.height}
								alt="Logo Napoleon"
							/>
						</a>
					</Link>

					<div className={styles.menu}>
						<ul>
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
							<li className={styles.dropdownButton}>
								<span {...buttonProps}>Produtos</span>
								<ul
									className={`${styles.dropdown} ${
										isOpen ? styles.visible : styles.hidden
									}`}
									onMouseLeave={handleLeaveDropdown}
									role="menu"
								>
									<span className={styles.dropdownIcon}>
										<Image
											src={dropdownIcon}
											width={dropdownIcon.width}
											height={dropdownIcon.height}
											alt="Clique para expandir"
										/>
									</span>
									{segments.map((segment: any, i: number) => {
										const iconUrl = `${
											segment.icon.url.startsWith("/")
												? process.env
														.NEXT_PUBLIC_STRAPI_API_URL
												: ""
										}${segment.icon.url}`;
										return (
											<li key={i}>
												<Link
													href={`/produtos/${segment.slug}`}
													{...itemProps[0]}
												>
													<a>
														<Image
															src={iconUrl}
															width={30}
															height={30}
															alt={segment.name}
														/>
														{segment.name}
													</a>
												</Link>
											</li>
										);
									})}
								</ul>
							</li>
							<li>
								<Link href="/contato">
									<a>Contato</a>
								</Link>
							</li>
						</ul>
						<div className={styles.menu__redes}>
							<a
								href={`${settings?.facebook || "#"}`}
								target="_blank"
								rel="noreferrer nofollow"
							>
								<Image
									src={FacebookLogo}
									width={FacebookLogo.width}
									height={FacebookLogo.height}
									alt="Logo Facebook"
								/>
							</a>
							<a
								href={`${settings?.instagram || "#"}`}
								target="_blank"
								rel="noreferrer nofollow"
							>
								<Image
									src={InstagramLogo}
									width={InstagramLogo.width}
									height={InstagramLogo.height}
									alt="Logo Instagram"
								/>
							</a>
							<a
								href={`${settings?.linkedin || "#"}`}
								target="_blank"
								rel="noreferrer nofollow"
							>
								<Image
									src={LinkedinLogo}
									width={LinkedinLogo.width}
									height={LinkedinLogo.height}
									alt="Logo Linkedin"
								/>
							</a>
						</div>
					</div>
				</div>

				<Popup
					modal
					closeOnDocumentClick={false}
					trigger={(open) => (
						<BurgerIcon open={open} sticked={isSticky} />
					)}
				>
					{(close: any) => <Menu close={close} segments={segments} />}
				</Popup>
			</header>
		</>
	);
}
