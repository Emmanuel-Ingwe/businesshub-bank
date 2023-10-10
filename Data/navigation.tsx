export type NavigationLinkType = {
	title: string;
	href?: string;
	children?: {
		title: string;
		href?: string;
		param?: string;
		description: string;
		action?: () => void;
	}[];
	param?: string;
	action?: () => void;
};

export const navigationLinks: NavigationLinkType[] = [
	{
		title: "Timeline",
		href: "#timeline",
	},
	{
		title: "Overview",
		href: "#overview",
	},
	{
		title: "FAQs",
		href: "#faqs",
	},
    {
		title: "Contact",
		href: "#contact",
	},
];