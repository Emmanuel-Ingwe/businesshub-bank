import { navigationLinks } from "../../../Data/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "../../global/Button";
import React, { useState } from "react";
import NavigationLink from "../NavigationLink";

const Navigation = () => {
	const [showMobileNav, setShowMobileNav] = useState(false);

	return (
		<>
			<nav className='flex items-center bg-navbg z-50 top-0 w-full h-[72px] border-b'>
				<div className='flex items-center justify-between'>
					<div>
						<Link href='/' passHref>
							<Image width={235} height={72}
								src="/images/logo.png"
								alt=""
							/>
						</Link>
					</div>
					<div className='flex items-center space-x-28'>
						<ul className='space-x-12 hidden xl:flex'>
						{navigationLinks.map((link) => {
								return <NavigationLink key={link.title} link={link} />;
							})}
						</ul>
						<div className='space-x-4 hidden xl:flex text-base'>
							<Link href='/' target='_blank'
									className='w-[153px] lg:text-s font-medium py-2.5'>
										<Button
										label="Register" className="bg-gradient-general"
										/>
							</Link>
						</div>
					</div>
					<button onClick={() => setShowMobileNav(true)} className='xl:hidden'>
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
