import { useRouter } from "next/router";

export const useActiveLink = (href: string): boolean => {
	const router = useRouter();

	const isActive: boolean =
		router.pathname === "/" && href === "/"
			? true
			: router.asPath.includes(href) && href !== "/"
			? true
			: false;
	return isActive;
};
