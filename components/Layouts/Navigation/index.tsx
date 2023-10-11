import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navigation = () => {

	return (
		<>
			<nav className='flex items-center bg-navbg z-50 top-0 w-full border-b'>
					<div className="flex">
						<Link href='/' passHref className="h-[100%]">
							<Image width={235} height={72}
								src="/images/logoo.svg"
								alt=""
							/>
						</Link>
					</div>

					<div className="flex w-full items-center justify-between">
						<div className="flex pl-[59px]">
							<Image
								alt=""
								height={22}
								width={23}
								src="/images/smiley.png"
							/>
							<h1 className=" text-secondary text-[15px] pl-1">Hello, <span className="font-semibold">Bolaji</span></h1>
						</div>

						<div className="pr-[117px]">
						<Image
								alt=""
								height={22}
								width={23}
								src="/images/smiley.png"
							/>
							<Image
								alt=""
								height={22}
								width={23}
								src="/images/smiley.png"
							/>
							<Image
								alt=""
								height={22}
								width={23}
								src="/images/smiley.png"
							/>
						</div>
					</div>
			</nav>
		</>
	);
};

export default Navigation;

