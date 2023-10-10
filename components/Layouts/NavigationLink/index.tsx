import { NavigationLinkType } from "../../../Data/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveLink } from "../../../hooks/useActiveLinks";
import { cn } from "../../../lib/utils"
import Link from "next/link";
import { useState } from "react";

type NavigationLinkProps = {
	link: NavigationLinkType;
};

const NavigationLink = ({ link }: NavigationLinkProps) => {
	const isActive = useActiveLink;

	return (
		<li
			className={cn(
				"font-SpaceGrotesk text-base font-medium transition-all rounded-lg hover:text-primary relative",
				isActive(link.href!) ? "text-primary" : "text-white"
			)}>
			<Link href={link.href!} className='p-[6px] flex items-center'>
				<span>{link.title}</span>
			</Link>
		</li>
	);
};

export default NavigationLink;